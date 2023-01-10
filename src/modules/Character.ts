import Hexagon from "../algorithm/Hexagon";
import Draw from "./Draw";
import Hex from "./Hex";
import System from "./System";
const spriteSheet = document.getElementById('sprite') as CanvasImageSource

export enum CHAR_STATUS {
  IDLE = 0,
  WALK = 1
}
class Character {
  hex: Hex;
  frame: number = 0;
  maxFrame: number = 0;
  status: CHAR_STATUS = CHAR_STATUS.IDLE;
  dir: -1 | 1 = 1;

  constructor ({
    hex = null
  } : {
    hex: Hex
  }) {
    this.hex = hex
    this.maxFrame = 12;
    this.initAnimate()
  }

  initAnimate() {
    function* animate(): Generator<any> {
      let tick = 0
      
      while (true) {
        tick += global.deltaTime

        if (tick > 100) {
          tick = 0
          this.frame += 1
          if (this.frame >= this.maxFrame) this.frame = 0
        }
        yield null
      }
    }

    System.startCoroutine(animate.bind(this))
  }

  startAnimate(status: CHAR_STATUS) {
    this.status = status
    switch (status) {
      case CHAR_STATUS.IDLE: {
        this.maxFrame = 12;
        this.frame = 0;
        break
      }
      case CHAR_STATUS.WALK: {
        this.maxFrame = 18;
        this.frame = 0;
        break
      }
      default: {
        this.maxFrame = 0;
        this.frame = 0;
      }
    }
    console.log(this.status)
  }
  

  render () {
    const { x, y } = Hexagon.hexToPixel(this.hex)

    Draw.drawImage(spriteSheet, { x, y }, this.frame, this.status, this.dir)
  }
}

export default Character;