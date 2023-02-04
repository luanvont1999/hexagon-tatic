import Hexagon from '../algorithm/Hexagon'
import Battle from '../modules/Battle'

export const changeHexBlock = (
	battle: Battle,
	hex: AxialHex,
	block = false
): void => {
	const { x, y } = Hexagon.axialToStore(hex)
	if (battle?.board[x][y]) {
		battle.board[x][y].block = block
	}
}

export default {
	changeHexBlock,
}
