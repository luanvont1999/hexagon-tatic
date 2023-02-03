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
			src: 'sprites/specter.png',
			name: 'specter.png',
			offsetX: 0,
			offsetY: 0,
			frames: 6,
			frameW: 104,
			frameH: 87,
			transform: {
				x: 13,
				y: 10,
			},
			duration: 400,
		},
		walk: {
			src: 'sprites/specter.png',
			name: 'specter.png',
			offsetX: 0,
			offsetY: 87,
			frames: 6,
			frameW: 108,
			frameH: 85,
			transform: {
				x: 13,
				y: 10,
			},
			duration: 500,
		},
		attack: {
			src: 'sprites/specter.png',
			name: 'specter.png',
			offsetX: 0,
			offsetY: 172,
			frames: 12,
			frameW: 428,
			frameH: 261,
			transform: {
				x: -3,
				y: 21,
			},
			duration: 500,
		},
		die: {
			src: 'sprites/specter.png',
			name: 'specter.png',
			offsetX: 0,
			offsetY: 433,
			frames: 11,
			frameW: 191,
			frameH: 125,
			transform: {
				x: 0,
				y: 0,
			},
			duration: 320,
		},
	},
}

const MONSTER = {
	Skeletrooper,
}

export default MONSTER
