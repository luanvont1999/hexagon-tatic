import Hexagon from "../algorithm/Hexagon";
import AStar from "../algorithm/PathFinding";
import Camera from "./Camera";
import Draw from "./Draw";
import Hex from "./Hex";
import Entity from "./Entity";

type BoardProps = Array<Array<Hex & { color?: string }>>;

const fakeBoardEntity = [
  { pos: { x: 0, y: 1 }, side: 'ally' },
  { pos: { x: 0, y: 3 }, side: 'ally' },
  { pos: { x: 0, y: 5 }, side: 'ally' },
  { pos: { x: 9, y: 1 }, side: 'enemy' },
  { pos: { x: 9, y: 3 }, side: 'enemy' },
  { pos: { x: 9, y: 5 }, side: 'enemy' },
]

class Battle {
  board: BoardProps;
  select: Hex;
  hover: Hex;
  path: AxialHex[] = [];
  target: Hex;
  astar: any;
  count: number = 0;
  canAction: boolean = true

  allies: Hex[] = []
  enemies: Hex[] = []

  constructor(board: BoardProps) {
    this.board = board;

    fakeBoardEntity.forEach(unit => {
      this.addHexEntity(unit.pos, unit.side === 'ally')
    })

    canvas.addEventListener('click', this.mouseClickHandler.bind(this))
    canvas.addEventListener('mousemove', this.mouseMoveHandler.bind(this))
  }

  addHexEntity(pos: Pos, side: boolean) {
    const arr = side ? this.allies : this.enemies
    const hex = new Hex(this.board[pos.y][pos.x])
    hex.owner = new Entity({ hex, dir: side ? 1 : -1 })
    arr.push(hex)
    this.board[pos.y][pos.x].block = true
  }

  async mouseClickHandler (event: MouseEvent) {
    if (!this.canAction) return
    const { shiftKey } = event
    const { r, q } = Hexagon.pixelToHex(Camera.mouseCam(event))
    const { x, y } = Hexagon.axialToStore({ r, q })
    if (r >= this.board.length || r < 0) return

    if (shiftKey) {
      this.board[x][y].block = !this.board[x][y].block
      return
    }

    if (this.select) {
      if (Hexagon.axialEqual(this.select, {r,q})) {
        this.select = null
        return
      }
      if (!this.board[x][y].block) {
        this.canAction = false
        const { x: xPrev, y: yPrev } = Hexagon.axialToStore(this.select)
        this.board[xPrev][yPrev].block = false
        await this.select.move(this.path)
        this.board[x][y].block = true
        this.select = null
        this.canAction = true
      }
    } else {
      this.select = this.allies.find(hex => Hexagon.axialEqual(hex, { r, q})) || this.enemies.find(hex => Hexagon.axialEqual(hex, { r, q}))
    }
  }

  mouseMoveHandler (event: MouseEvent) {
    if (!this.select || !this.canAction) return

    const hex = Hexagon.pixelToHex(Camera.mouseCam(event))

    const { x, y } = Hexagon.axialToStore(hex)

    if (x >= this.board.length || x < 0 || y < 0 || y >= this.board[x].length) return

    if (this.board[x][y]?.block) return

    const _hover = new Hex(this.board[x][y])
    if (_hover.r !== this.hover?.r || _hover.q !== this.hover?.q) {
      this.hover = _hover

      this.path = AStar.search(this.board, this.select, this.hover)
      this.path.splice(0, 1)
    }
  }

  render() {
    this.board?.map((row) => {
      row?.map((hex) => {
        const { x, y } = Hexagon.hexToPixel(hex)

        let color = hex.color
        if (this.select) {
          for (let i = 0; i < 6; i++) {
            const neighbor = Hexagon.axialNeighbor(this.select, i)
            if (neighbor) {
              if (hex.q === neighbor.q && hex.r === neighbor.r) color = 'lightyellow'
            }
          }
        }
        if (hex.block) color = 'gray'

        Draw.drawHex({ x, y, size: HEX_SIZE }, color)

      });
    });

    this.allies?.length && this.allies.forEach(hex => {
      const { x, y } = Hexagon.hexToPixel(hex)
      hex?.owner?.render()
    })
    this.enemies?.length && this.enemies.forEach(hex => {
      const { x, y } = Hexagon.hexToPixel(hex)
      hex?.owner?.render()
    })
    this.path?.length && this.path?.forEach(hex => {
      const { x, y } = Hexagon.hexToPixel(hex)
      Draw.drawHex({ x, y, size: HEX_SIZE * 0.3}, 'orange')
    })
  }
}

export default Battle;
