import Hex from '../modules/Hex'
import Hexagon from './Hexagon'

type AStarNode = AxialHex & {
	f: number
	g: number
	h: number
	block: boolean
	debug: any
	parent: AStarNode
	neighbors: AStarNode[]
}

const AStar = {
	init: function (grid: Array<Array<AStarNode>>, _end: AxialHex) {
		for (let x = 0; x < grid.length; x++) {
			for (let y = 0; y < grid[x].length; y++) {
				grid[x][y].f = 0
				grid[x][y].g = 0
				grid[x][y].h = 0
				grid[x][y].debug = 0
				grid[x][y].parent = null
				grid[x][y].neighbors = []
			}
		}

		const end = Hexagon.axialToStore(_end)
		for (let x = 0; x < grid.length; x++) {
			for (let y = 0; y < grid[x].length; y++) {
				const _neighbors = Hexagon.getAxialNeighbors(grid[x][y])
				for (let neighbor of _neighbors) {
					const { x: _x, y: _y } = Hexagon.axialToStore(neighbor)
					if (_x < 0 || _x >= grid.length || _y >= grid[x].length || _y < 0)
						continue
					if (!grid[_x][_y].block || (_x === end.x && _y === end.y)) {
						grid[x][y].neighbors.push(grid[_x][_y])
					}
				}
			}
		}

		return grid
	},

	getBoardHex: function (
		hex: AxialHex,
		grid: Array<Array<AStarNode>>
	): AStarNode {
		const { x, y } = Hexagon.axialToStore(hex)
		return grid[x][y]
	},

	search: function (
		board: Array<Array<AxialHex>>,
		_start: AxialHex,
		_end: AxialHex
	): AxialHex[] {
		const grid = AStar.init(board as Array<Array<AStarNode>>, _end)

		const start = AStar.getBoardHex(_start, grid)
		const end = AStar.getBoardHex(_end, grid)

		let openList: AStarNode[] = []
		let closedList: AStarNode[] = []
		let path: AStarNode[] = []
		openList.push(start as AStarNode)

		while (openList.length) {
			let lowestIndex = 0
			for (let i = 0; i < openList.length; i++) {
				if (openList[i].f < openList[lowestIndex].f) {
					lowestIndex = i
				}
			}
			let current = openList[lowestIndex]
			if (Hexagon.axialEqual(current, end)) {
				let temp = current
				path.push(temp)
				while (temp.parent) {
					path.push(temp.parent)
					temp = temp.parent
				}
				return path.reverse()
			}

			openList.splice(lowestIndex, 1)
			closedList.push(current)

			let neighbors = current.neighbors

			for (let i = 0; i < neighbors.length; i++) {
				let neighbor = neighbors[i]

				if (!closedList.includes(neighbor)) {
					let possibleG = current.g + 1
					if (!openList.includes(neighbor)) {
						openList.push(neighbor)
					} else if (possibleG >= neighbor.g) {
						continue
					}

					neighbor.g = possibleG
					neighbor.h = Hexagon.axialDistance(neighbor, end)
					neighbor.f = neighbor.g + neighbor.h
					neighbor.parent = current
				}
			}
		}

		return []
	},
}

export default AStar
