import Hexagon from "../algorithm/Hexagon";
import AStar from "../algorithm/PathFinding";
import Camera from "./Camera";
import Draw from "./Draw";
import Hex from "./Hex";
import Entity from "./Entity";

type BoardProps = Array<Array<Hex & { color?: string }>>;

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

    this.select = new Hex(this.board[3][3])
    this.select.owner = new Entity({ hex: this.select })

    canvas.addEventListener('click', this.mouseClickHandler.bind(this))
    canvas.addEventListener('mousemove', this.mouseMoveHandler.bind(this))
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
      if (!this.board[x][y].block) {
        this.canAction = false
        await this.select.move(this.path)
        this.canAction = true
      }
    } else {
      this.select = new Hex(this.board[x][y])
      this.select.owner = new Entity({ hex: this.select })
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

      console.time("Finding");
      this.path = AStar.search(this.board, this.select, this.hover)
      console.timeEnd("Finding");
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

    if (this.select) {
      const { x, y } = Hexagon.hexToPixel(this.select)
      
      this.select?.owner?.render()
    }
    this.path?.length && this.path?.forEach(hex => {
      const { x, y } = Hexagon.hexToPixel(hex)
      Draw.drawHex({ x, y, size: HEX_SIZE * 0.3}, 'orange')
    })
  }
}

export default Battle;
