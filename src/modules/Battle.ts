import Hexagon from "../algorithm/Hexagon";
import Camera from "./Camera";
import Draw from "./Draw";
import Hex from "./Hex";

type BoardProps = Array<Array<Hex & { color?: string }>>;

class Battle {
  board: BoardProps;
  select: Hex;
  hover: Hex;

  constructor(board: BoardProps) {
    this.board = board;

    canvas.addEventListener('click', this.mouseClickHandler.bind(this))
    canvas.addEventListener('mousemove', this.mouseMoveHandler.bind(this))
  }

  mouseClickHandler (event: MouseEvent) {
    const { x, y } = Camera.mouseCam(event)
    const hex = Hexagon.pixelToHex({ x, y })
    const { r, q } = Hexagon.axialToStore(hex)
    if (r >= this.board.length || r < 0) return
    if (this.select === this.board[r][q]) {
      this.select = null
      return
    } else {
      this.select = this.board[r][q]
      console.log(this.select)
    }
  }

  mouseMoveHandler (event: MouseEvent) {
    const { x, y } = Camera.mouseCam(event)

    const hex = Hexagon.pixelToHex({ x, y })
    const { r, q } = Hexagon.axialToStore(hex)
    if (r >= this.board.length || r < 0) return
    this.hover = this.board[r][q]
  }

  render() {
    this.board?.map((row) => {
      row?.map((hex) => {
        const x = HEX_SIZE * (Math.sqrt(3) * hex.q + (Math.sqrt(3) / 2) * hex.r);
        const y = HEX_SIZE * ((3 / 2) * hex.r);

        let color = hex.color
        if (this.select) {
          for (let i = 0; i < 6; i++) {
            const neighbor = Hexagon.axialNeighbor(this.select, i)
            if (neighbor) {
              if (hex.q === neighbor.q && hex.r === neighbor.r) color = 'lightyellow'
            }
          }
        }
        if (this.select === hex) color = 'red'

        Draw.drawHex({ x, y, size: HEX_SIZE }, color)
        Draw.drawText(`[${hex.r}, ${hex.q}]`, { x: x - 25, y: y + 10 })
      });
    });
  }
}

export default Battle;
