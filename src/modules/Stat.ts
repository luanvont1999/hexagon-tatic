export enum BASE_STAT {
  STR = 'strength',
  AGI = 'agility',
  VIT = 'vitality',
  INT = 'intellegent',
}

export type StatModifier = {
  source: string;
  value: number;
}

class Stat {
  name: string;
  baseValue: number;
  finalValue: number;

  addModifier: StatModifier[] = [];
  ampModifier: StatModifier[] = [];

  constructor ({ name, value } : { name: string, value: number}) {
    this.name = name
    this.baseValue = value

    this.calcFinalValue()
  }

  setValue(value: number): number {
    this.baseValue = value
    return this.calcFinalValue()
  }

  calcFinalValue() {
    const totalAdd = this.addModifier?.reduce((total, each) => total + each.value, 0)
    const totalAmp = this.ampModifier?.reduce((total, each) => total + each.value, 0)

    this.finalValue = this.baseValue * (1 + totalAmp / 100) + totalAdd
    return this.finalValue
  }
}

export default Stat