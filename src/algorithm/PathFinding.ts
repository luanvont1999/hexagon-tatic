import Hex from "../modules/Hex";
import Hexagon from "./Hexagon";

type AStarNode = Hex & {
  f: number;
  g: number;
  h: number;
  debug: any;
  parent: AStarNode;
  neighbors: AStarNode[];
}

const AStar = {
  init: function (grid: Array<Array<AStarNode>>) {
    for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid[x].length; y++) {
        grid[x][y].f = 0;
        grid[x][y].g = 0;
        grid[x][y].h = 0;
        grid[x][y].debug = 0;
        grid[x][y].parent = null;
        grid[x][y].neighbors = []
      }
    }

    for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid[x].length; y++) {
        const _neighbors = Hexagon.getAxialNeighbors(grid[x][y])
        for (let neighbor of _neighbors) {
          const { r, q } = Hexagon.axialToStore(neighbor)
          if (r < 0  || r >= grid.length  || q >= grid[x].length || q < 0) continue
          if (!grid[r][q].block) {
            grid[x][y].neighbors.push(grid[r][q])
          }
        }
      }
    }

    return grid
  },

  search: function (board: Array<Array<Hex>>, _start: AxialHex, _end: AxialHex): AxialHex[] {
    const grid = AStar.init(board as Array<Array<AStarNode>>)

    const { r: rStart, q: qStart } = Hexagon.axialToStore(_start)
    const { r: rEnd, q: qEnd } = Hexagon.axialToStore(_end)
    const start = grid[rStart][qStart]
    const end = grid[rEnd][qEnd]

    let openList: AStarNode[] = []
    let closedList: AStarNode[] = []
    let path: AStarNode[] = []
    openList.push(start as AStarNode)

    while (openList.length) {
      let lowestIndex = 0
      for(let i = 0; i < openList.length; i++) {
        if (openList[i].f < openList[lowestIndex].f) {
          lowestIndex = i
        }
      }
      let current = openList[lowestIndex]
      if (current === end) {
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
  }
}

export default AStar