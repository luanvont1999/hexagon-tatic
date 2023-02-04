import Hexagon from '../algorithm/Hexagon'
import Battle, { Team } from './Battle'
import Draw from './Draw'
import Character, { CHAR_STATUS } from './Entity'
import System from './System'
import { changeHexBlock } from '../helpers/board'

class Hex {
	battle?: Battle
	team?: Team
	q: number
	r: number
	owner?: Character
	block?: boolean
	color?: string = 'white'

	constructor({
		battle,
		team,
		q,
		r,
		color,
		owner = null,
		block = false,
	}: {
		battle?: Battle
		team?: Team
		q: number
		r: number
		color?: string
		owner?: Character
		block?: boolean
	}) {
		this.battle = battle
		this.team = team

		this.q = q
		this.r = r
		this.owner = owner
		this.block = block
		this.color = team?.color || color || 'white'
	}

	updatePos?(vec: AxialHex) {
		this.r = vec.r
		this.q = vec.q
	}

	async move(path: AxialHex[]) {
		const timeToMove = this.owner.sprites.walk.duration

		function* startMove(): Generator<any> {
			if (!path.length) return

			let tick = 0
			let currPos = { ...this }
			let nextPos = path.splice(0, 1)[0]
			changeHexBlock(this.battle, currPos, false)
			changeHexBlock(this.battle, nextPos, true)
			this.owner.dir = Hexagon.axialIsLeft(nextPos, currPos) ? -1 : 1

			while (true) {
				this.updatePos({
					r: Hexagon.lerp(currPos.r, nextPos.r, tick / timeToMove),
					q: Hexagon.lerp(currPos.q, nextPos.q, tick / timeToMove),
				})

				if (tick >= timeToMove) {
					tick = 0
					currPos = nextPos
					if (!path.length) {
						this.updatePos(nextPos)
						break
					}
					nextPos = path.splice(0, 1)[0]
					this.owner.dir = Hexagon.axialIsLeft(nextPos, currPos) ? -1 : 1
					changeHexBlock(this.battle, currPos, false)
					changeHexBlock(this.battle, nextPos, true)
				}
				tick += global.deltaTime

				yield null
			}
		}

		this.owner.startAnimate(CHAR_STATUS.WALK, timeToMove * path.length - 1)
		await System.startCoroutine(startMove.bind(this))
		this.owner.startAnimate(CHAR_STATUS.IDLE)
	}

	render() {
		const { x, y } = Hexagon.hexToPixel(this as AxialHex)

		Draw.strokeHex({ x, y, size: HEX_SIZE }, 10, this.color)
	}
}

export default Hex
