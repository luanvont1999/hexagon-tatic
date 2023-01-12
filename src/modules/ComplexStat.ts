import STAT, { COMPLEX_STAT } from "../constants/StatConstants";
import { EntityStat } from "./Entity";
import Stat, { BASE_STAT } from "./Stat";

class ComplexStat extends Stat {
  constructor ({ name, value } : { name: string, value: EntityStat}) {
    super({ name, value: 0 })

    this.calcHighStat(value)

    this.calcFinalValue()
  }

  calcHighStat?(stats: EntityStat) {
    const formula: string = STAT.COMPLEX_STAT_FORMULA[this.name as keyof Record<COMPLEX_STAT, string>]
    const result = formula.replace(/{(\w+)}/g, (match, key): string => {
      return `${stats[key as keyof EntityStat].finalValue}`
    })
    this.baseValue = eval(result) || 0
  }
}

export default ComplexStat