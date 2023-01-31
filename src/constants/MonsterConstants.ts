import { EntityStat } from '../modules/Entity'
import { BASE_STAT } from './StatConstants'

type MonsterData = {
	name: string
	stats: Record<BASE_STAT, number>
	sprites: Object
}

const Skeletrooper: MonsterData = {
	name: 'skeletrooper',
	stats: {
		strength: 1,
		agility: 1,
		vitality: 1,
		intellegent: 1,
		attack_range: 1,
	},
	sprites: {
		idle: {
			src: 'sprites/skeletrooper/stand.png',
			name: 'skeletrooper.png',
			offsetX: 0,
			offsetY: 0,
			frames: 4,
			frameW: 57,
			frameH: 93,
			transform: { x: 0, y: 0 },
			duration: 320,
		},
		walk: {
			src: 'sprites/skeletrooper/move.png',
			name: 'skeletrooper.png',
			offsetX: 0,
			offsetY: 0,
			frames: 4,
			frameW: 56,
			frameH: 96,
			transform: { x: 0, y: 0 },
			duration: 320,
		},
		attack: {
			name: 'skeletrooper.png',
			offsetX: 0,
			offsetY: 0,
			frames: 4,
			frameW: 57,
			frameH: 93,
			transform: { x: 0, y: 0 },
			duration: 320,
		},
	},
}

const MONSTER = {
	Skeletrooper,
}

export default MONSTER
