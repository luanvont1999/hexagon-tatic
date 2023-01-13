import Hexagon from "../algorithm/Hexagon";
import AStar from "../algorithm/PathFinding";
import ENTITY from "../constants/EntityContants";
import { BASE_STAT, COMPLEX_STAT } from "../constants/StatConstants";
import Battle from "./Battle";
import ComplexStat from "./ComplexStat";
import Draw from "./Draw";
import Hex from "./Hex";
import Stat from "./Stat";
import System from "./System";
const spriteSheet = document.getElementById('sprite') as CanvasImageSource

export enum CHAR_STATUS {
  IDLE = 0,
  WALK = 1,
  ATTACK = 2,
}

export type EntityStat = Record<BASE_STAT, Stat> & Record<COMPLEX_STAT, ComplexStat> & {

}

class Entity {
  battle?: Battle;
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
    this.battle = hex.battle
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
      case CHAR_STATUS.ATTACK: {
        this.maxFrame = 12;
        this.frame = 0;
        break
      }
      default: {
        this.maxFrame = 0;
        this.frame = 0;
      }
    }
  }

  async action () {
    const team = this.hex.team
    const targets = team.enemiesTeam.map(eTeam => eTeam.allies).flat()

    let targetInRange = targets.filter(tar => Hexagon.isInRange(this.hex, tar, this.getFinalValue(BASE_STAT.RAN)))
    console.log(`target in range[${this.getFinalValue(BASE_STAT.RAN)}]: `, targetInRange)

    if (!targetInRange.length) {
      await this.moveToNearestTarget(targets)
    }
    targetInRange = targets.filter(tar => Hexagon.isInRange(this.hex, tar, this.getFinalValue(BASE_STAT.RAN)))
    if (targetInRange.length) {
      await this.attack()
    }
  }

  async moveToNearestTarget (targets: Array<Hex>) {
    const nearestPath = targets.reduce((_path, target) => {
      const path = AStar.search(this.battle.board, this.hex, target)
      path.splice(0, 1)
      if (_path.length === 0) {
        if (path.length) return path
        return _path
      }
      if (path.length && path.length < _path.length) return path
      return _path
    }, [])
    if (nearestPath.length > 1) {
      nearestPath.splice(nearestPath.length - 1, 1)
      console.log(`move ${this.getFinalValue(COMPLEX_STAT.MS)}`)
      await this.hex.move(nearestPath.splice(0, this.getFinalValue(COMPLEX_STAT.MS)))
    }
  }

  async attack () {
    this.startAnimate(CHAR_STATUS.ATTACK)
    await System.sleep(1000)
    this.startAnimate(CHAR_STATUS.IDLE)
  }

  getFinalValue (name: BASE_STAT | COMPLEX_STAT): number {
    return this.stats[name].finalValue
  }
  

  render () {
    const { x, y } = Hexagon.hexToPixel(this.hex)

    Draw.drawImage(spriteSheet, { x, y }, this.frame, this.status, this.dir)
  }
}

const generateRandomBaseStat = (): Record<BASE_STAT, number>  => {
  const stats = ENTITY.DEFAULT_STAT

  const total = Math.round((Object.keys(BASE_STAT).length - 1) * 2.5)
  let sum = 0
  for (let stat in stats) {
    const rand = Math.round(Math.random() * 2 + 1)
    sum += rand
    stats[stat as keyof Record<BASE_STAT, number>] = rand
  }
  stats[BASE_STAT.AGI] = total - (sum - stats[BASE_STAT.AGI])
  stats[BASE_STAT.RAN] = 1

  return stats
}

export default Entity;