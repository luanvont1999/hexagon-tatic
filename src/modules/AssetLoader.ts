const importImage = async (src: string): Promise<HTMLImageElement> => {
	return new Promise((resolve, reject) => {
		const image = new Image()

		image.onload = () => {
			resolve(image)
		}

		image.src = src
	})
}

class AssetLoader {
	static loaded: Record<string, HTMLImageElement> = {}

	constructor() {}

	static load = async (
		name: string,
		srcString: string
	): Promise<HTMLImageElement> => {
		if (this.loaded[name]) {
			console.log(`${name} had loaded`)
		}
		const path = `./assets/${srcString}`

		this.loaded[name] = null
		console.log(`${name} loading`)
		const img = await importImage(path)
		this.loaded[name] = img

		return img
	}

	static get = (name: string): HTMLImageElement => this.loaded[name]
}

export default AssetLoader
