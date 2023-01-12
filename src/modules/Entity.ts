import Hexagon from "../algorithm/Hexagon";
import ENTITY from "../constants/EntityContants";
import { COMPLEX_STAT } from "../constants/StatConstants";
import ComplexStat from "./ComplexStat";
import Draw from "./Draw";
import Hex from "./Hex";
import Stat, { BASE_STAT } from "./Stat";
import System from "./System";
const spriteSheet = document.getElementById('sprite') as CanvasImageSource

export enum CHAR_STATUS {
  IDLE = 0,
  WALK = 1
}

export type EntityStat = Record<BASE_STAT, Stat> & Record<COMPLEX_STAT, ComplexStat> & {

}

class Entity {
  hex: Hex;
  frame: number = 0;
  maxFrame: number = 0;
  status: CHAR_STATUS = CHAR_STATUS.IDLE;
  dir: -1 | 1 = 1;

  stats: EntityStat;

  constructor ({
    hex = null,
    dir = 1,
    base_stats = ENTITY.DEFAULT_STAT,
  } : {
    hex: Hex,
    dir?: -1 | 1,
    base_stats?: Record<BASE_STAT, number>
  }) {
    this.hex = hex
    this.dir = dir
    // this.stats = this.initEntityBaseStat(base_stats)
    this.stats = this.initEntityBaseStat(generateRandomBaseStat())
    this.calcEntityComplexStat()
    this.maxFrame = 12;
    this.initAnimate()
  }

  initEntityBaseStat(base_stats: Record<BASE_STAT, number>) {
    return Object.entries(base_stats).reduce((obj, [ key, value ]) => {
      obj[key as keyof EntityStat] = new Stat({ name: key, value })
      return obj
    }, {} as EntityStat)
  }
  calcEntityComplexStat() {
    Object.entries(COMPLEX_STAT).forEach(([key, value]) => {
      this.stats[value as keyof EntityStat] = new ComplexStat({name: value, value: this.stats})
    });
  }

  initAnimate() {
    function* animate(): Generator<any> {
      let tick = 0
      
      while (true) {
        tick += global.deltaTime
        const duration = 1000 / this.maxFrame

        if (tick > duration) {
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
  }

  action () {

  }
  

  render () {
    const { x, y } = Hexagon.hexToPixel(this.hex)

    Draw.drawImage(spriteSheet, { x, y }, this.frame, this.status, this.dir)
  }
}

const generateRandomBaseStat = (): Record<BASE_STAT, number>  => {
  const stats = ENTITY.DEFAULT_STAT

  const total = Math.round(Object.keys(BASE_STAT).length * 2.5)
  let sum = 0
  for (let stat in stats) {
    const rand = Math.round(Math.random() * 2 + 1)
    sum += rand
    stats[stat as keyof Record<BASE_STAT, number>] = rand
  }
  stats[BASE_STAT.AGI] = total - (sum - stats[BASE_STAT.AGI])

  return stats
}

export default Entity;