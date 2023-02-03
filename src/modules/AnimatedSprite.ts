import Draw from './Draw'
import System from './System'

class AnimateSprite {
	src: HTMLImageElement
	offsetX: number
	offsetY: number
	frame: number
	frames: number
	frameW: number
	frameH: number
	transform: Pos
	name: string
	duration: number

	constructor({
		src,
		name = '',
		offsetX = 0,
		offsetY = 0,
		frames = 0,
		frameW = 0,
		frameH = 0,
		transform = { x: 0, y: 0 },
		duration = 0,
	}: {
		src: HTMLImageElement
		name: string
		offsetX?: number
		offsetY?: number
		frames?: number
		frameW?: number
		frameH?: number
		transform?: Pos
		duration?: number
	}) {
		console.log(src)
		this.src = src
		this.name = name
		this.offsetX = offsetX
		this.offsetY = offsetY
		this.frames = frames
		this.frameW = frameW
		this.frameH = frameH
		this.transform = transform
		this.duration = duration
		this.frame = 0
	}

	async startAnimate(long?: number) {
		const that = this
		await System.startCoroutine(function* (): Generator<any> {
			let tick = 0
			while (true) {
				if (tick >= long) {
					that.frame = 0
					break
				}
				that.frame = Math.floor(
					(tick % that.duration) / (that.duration / that.frames)
				)
				if (that.frame >= that.frames) {
					that.frame = 0
				}
				tick += global.deltaTime
				yield null
			}
		})
	}

	render(pos: Pos, dir: -1 | 1) {
		const { x: xOrigin, y: yOrigin } = pos

		const x = xOrigin + this.transform.x * dir
		const y = yOrigin + this.transform.y

		Draw.drawImage(
			this.src,
			{ x, y, width: this.frameW, height: this.frameH },
			this.frame,
			{ x: this.offsetX, y: this.offsetY },
			dir
		)
	}
}

export default AnimateSprite
