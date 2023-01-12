import { BASE_STAT } from "../modules/Stat"

export enum COMPLEX_STAT {
  HP = 'health_point',
  MP = 'mana_point',
  PD = 'physical_damgage',
  MD = 'magical_damage',
  AS = 'attack_speed',
  MS = 'movement_speed',
}

const COMPLEX_STAT_FORMULA: Record<COMPLEX_STAT, string> = {
  [COMPLEX_STAT.HP]: `{${BASE_STAT.VIT}} * 10`,
  [COMPLEX_STAT.MP]: `{${BASE_STAT.INT}} * 10`,
  [COMPLEX_STAT.PD]: `{${BASE_STAT.STR}} * 3`,
  [COMPLEX_STAT.MD]: `{${BASE_STAT.INT}} * 3`,
  [COMPLEX_STAT.AS]: `{${BASE_STAT.AGI}} * 1.5`,
  [COMPLEX_STAT.MS]: `{${BASE_STAT.AGI}} * 10`
}

const STAT = {
  COMPLEX_STAT_FORMULA
}

export default STAT