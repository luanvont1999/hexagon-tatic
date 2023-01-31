import AnimateSprite from './AnimatedSprite'
import Camera from './Camera'

const spriteSheet = document.getElementById('sprite') as CanvasImageSource

const A = (2 * Math.PI) / 6

export const clearScreen = (): void => {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
}

export const drawHex = (hex: Hexagon, color: string = 'white') => {
	const { x, y, size } = Camera.inCam(hex)
	ctx.beginPath()
	for (var i = 0; i < 6; i++) {
		ctx.lineTo(x + size * Math.sin(A * i), y + size * Math.cos(A * i))
	}
	ctx.closePath()
	ctx.fillStyle = color
	ctx.fill()
}

export const strokeHex = (
	hex: Hexagon,
	thickness: number = 1,
	color: string = 'white'
) => {
	let { x, y, size } = Camera.inCam(hex)
	let _thickness = Camera.inCam(thickness)
	size = size - thickness / 2
	ctx.beginPath()
	for (var i = 0; i < 6; i++) {
		ctx.lineTo(x + size * Math.sin(A * i), y + size * Math.cos(A * i))
	}
	ctx.closePath()
	ctx.save()
	ctx.strokeStyle = color
	ctx.lineWidth = _thickness
	ctx.stroke()
	ctx.restore()
}

export const drawRect = (rect: Rect) => {
	const { x, y, width, height } = Camera.inCam(rect)
	ctx.fillStyle = 'white'
	ctx.fillRect(x, y, width, height)
}

export const drawText = (
	text: string,
	pos: Pos,
	color: string = 'black'
): void => {
	const { x, y } = Camera.inCam(pos)
	ctx.font = '20px Arial'
	ctx.fillStyle = color
	ctx.fillText(text, x, y)
}

export const drawImage = (
	source: CanvasImageSource,
	rect: Rect,
	frame: number = 0,
	dir: -1 | 1 = 1
): void => {
	let { x, y, width, height } = Camera.inCam(rect)
	const scale = Camera.inCam(1)
	ctx.save()
	if (dir === -1) {
		ctx.translate(x + (width * scale) / 2, y - ((height + 80) * scale) / 2)
		ctx.scale(-1, 1)
	} else {
		ctx.translate(x - (width * scale) / 2, y - ((height + 80) * scale) / 2)
	}
	ctx.drawImage(
		source,
		frame * width,
		0,
		width,
		height,
		0,
		0,
		width * scale,
		height * scale
	)
	ctx.restore()
}

const drawAnimation = (animation: AnimateSprite, dir: -1 | 1) => {}

const Draw = {
	clearScreen,
	drawHex,
	strokeHex,
	drawRect,
	drawText,
	drawImage,
}

export default Draw
