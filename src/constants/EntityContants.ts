import { EntityStat } from "../modules/Entity";
import { BASE_STAT } from "../modules/Stat";

const DEFAULT_STAT: Record<BASE_STAT, number> = {
  [BASE_STAT.STR]: 1,
  [BASE_STAT.AGI]: 1,
  [BASE_STAT.VIT]: 1,
  [BASE_STAT.INT]: 1
}

const ENTITY = {
  DEFAULT_STAT
}

export default ENTITY