import Hexagon from "../algorithm/Hexagon";
import Character, { CHAR_STATUS } from "./Character";
import System from "./System";

class Hex {
  q: number;
  r: number;
  owner?: Character;
  block?: boolean;
  
  constructor ({
    q, r,
    owner = null,
    block = false,
  } : {
    q: number;
    r: number;
    owner?: Character;
    block?: boolean
    
  } ) {
    this.q = q
    this.r = r
    this.owner = owner
    this.block = block
  }
  
  updatePos? (vec: AxialHex) {
    this.r = vec.r
    this.q = vec.q
  }

  async move (path: AxialHex[]) {
    function* startMove(): Generator<any> {
      if (!path.length) return

      let tick = 0
      let currPos = {...this}
      let nextPos = path.splice(0, 1)[0]
      
      while (true) {
        this.updatePos({
          r: Hexagon.lerp(currPos.r, nextPos.r, tick / 500),
          q: Hexagon.lerp(currPos.q, nextPos.q, tick / 500)
        })

        if (tick >= 500) {
          this.owner.dir = currPos.q > nextPos.q ? -1 : 1
          tick = 0
          currPos = nextPos
          if (!path.length) {
            this.updatePos(nextPos)
            break
          }
          nextPos = path.splice(0, 1)[0]
        }
        tick += global.deltaTime

        yield null
      }
    }
    
    this.owner.startAnimate(CHAR_STATUS.WALK)
    await System.startCoroutine(startMove.bind(this))
    this.owner.startAnimate(CHAR_STATUS.IDLE)
  }
}

export default Hex