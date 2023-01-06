import Hexagon from "../algorithm/Hexagon";
import Camera from "./Camera";
import Draw from "./Draw";
import Hex from "./Hex";

type BoardProps = Array<Array<Hex>>;

class Battle {
  board: BoardProps;
  select: Hex;

  constructor(board: BoardProps) {
    this.board = board;

    canvas.addEventListener('click', this.mouseClickHandler.bind(this))
  }

  mouseClickHandler (event: MouseEvent) {
    const { offsetX: mouseX, offsetY: mouseY } = event
    const x = mouseX - 200
    const y = mouseY - 200
    const hex = Hexagon.pixelToHex(Camera.inCam({ x, y, size: HEX_SIZE }))
    const { r, q } = Hexagon.axialToStore(hex)
    this.select = this.board[r][q]
  }

  render() {
    this.board?.map((row) => {
      row?.map((hex) => {
        const x = 200 + HEX_SIZE * (Math.sqrt(3) * hex.q + (Math.sqrt(3) / 2) * hex.r);
        const y = 200 + HEX_SIZE * ((3 / 2) * hex.r);

        const color = hex === this.select ? 'red' : 'white'
        Draw.drawHex({ x, y, size: HEX_SIZE }, color)
        Draw.drawText(`[${hex.r}, ${hex.q}]`, { x: x - 25, y: y + 10 })
      });
    });
  }
}

export default Battle;
