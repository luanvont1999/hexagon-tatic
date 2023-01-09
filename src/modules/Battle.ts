import Hexagon from "../algorithm/Hexagon";
import AStar from "../algorithm/PathFinding";
import Camera from "./Camera";
import Draw from "./Draw";
import Hex from "./Hex";

type BoardProps = Array<Array<Hex & { color?: string }>>;

class Battle {
  board: BoardProps;
  select: Hex;
  hover: Hex;
  path: Hex[] = [];
  target: Hex;
  astar: any;
  count: number = 0;
  canAction: boolean = true

  constructor(board: BoardProps) {
    this.board = board;

    canvas.addEventListener('click', this.mouseClickHandler.bind(this))
    canvas.addEventListener('mousemove', this.mouseMoveHandler.bind(this))
  }

  mouseClickHandler (event: MouseEvent) {
    if (!this.canAction) return
    const { shiftKey } = event
    const { x, y } = Camera.mouseCam(event)
    const hex = Hexagon.pixelToHex({ x, y })
    const { r, q } = Hexagon.axialToStore(hex)
    if (r >= this.board.length || r < 0) return
    if (!shiftKey && !this.board[r][q].block) {
      if (this.select) {
        if (this.board[r][q] === this.select) {
          this.select = null
        } else {
          this.move()
        }
      } else {
        this.select = this.board[r][q]
      }
    } else {
      this.board[r][q].block = true
    }
  }

  mouseMoveHandler (event: MouseEvent) {
    if (!this.select || !this.canAction) return
    const { x, y } = Camera.mouseCam(event)

    const hex = Hexagon.pixelToHex({ x, y })
    const { r, q } = Hexagon.axialToStore(hex)
    if (r >= this.board.length || r < 0) return
    const _hover = this.board[r][q]
    if (_hover !== this.hover) {
      this.hover = _hover
      if (this.select) {
        this.path = AStar.search(this.board, this.select, this.hover)
        this.path.splice(0, 1)
      }
    }
  }

  move () {
    function* startMove(): Generator<any> {
      this.canAction = false
      let tick = 0
      let currPos = this.select
      let nextPos = this.path.splice(0, 1)[0]
      
      while (true) {
        if (tick >= 300) {
          tick = 0
          currPos = nextPos
          if (!this.path.length) {
            this.select = nextPos
            break
          }
          nextPos = this.path.splice(0, 1)[0]
        }
        
        tick += global.deltaTime
        this.select = currPos

        this.select = {
          ...this.select,
          r: Hexagon.lerp(currPos.r, nextPos.r, tick / 300),
          q: Hexagon.lerp(currPos.q, nextPos.q, tick / 300)
        }

        // this.select.r = Hexagon.lerp(currPos.r, nextPos.r, tick / 300)
        // this.select.q = Hexagon.lerp(currPos.q, nextPos.q, tick / 300)

        yield null
      }

      this.canAction = true
    }
    const iter = startMove.bind(this)()

    animCallback.push(iter)
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

        // Draw.drawText(`[${hex.r}, ${hex.q}]`, { x: x - 25, y: y + 10 })
      });
    });

    if (this.select) {
      const { x, y } = Hexagon.hexToPixel(this.select)
      Draw.drawHex({ x, y, size: HEX_SIZE }, 'green')
    }
    this.path?.length && this.path?.forEach(hex => {
      const { x, y } = Hexagon.hexToPixel(hex)
      Draw.drawHex({ x, y, size: HEX_SIZE * 0.3}, 'orange')
    })
  }
}

export default Battle;
