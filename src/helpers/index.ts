import colorHelpers from './color'

export const objFilterNaN = (obj: object): any => {
	if (typeof obj !== 'object') return obj

	Object.keys(obj).forEach((key: string) => {
		if (
			obj[key as keyof object] === undefined ||
			Number.isNaN(obj[key as keyof object])
		) {
			delete obj[key as keyof object]
		}
	})

	return obj
}

export default {
	...colorHelpers,
	objFilterNaN,
}
