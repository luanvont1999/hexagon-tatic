import { update } from 'js-coroutines'
import Battle from './modules/Battle'
import Camera from './modules/Camera'
import Canvas from './modules/Canvas'
import Draw from './modules/Draw'
import Hex from './modules/Hex'
import Keyboard, { Key } from './modules/Keyboard'

import './constants'
import './style.css'

const CANVAS = document.createElement('canvas')
global.canvas = CANVAS
global.ctx = CANVAS.getContext('2d')
global.cameraSpeed = 1000
global.animCallback = []

const APP = document.createElement('div')
APP.id = 'app'
APP.appendChild(CANVAS)
const btnStart = document.createElement('button')
btnStart.innerText = 'START'
btnStart.id = 'btn-start'
APP.appendChild(btnStart)

document.body.appendChild(APP)
const battle = new Battle([])

const render = (): void => {
	Draw.clearScreen()

	ctx.font = '30px Arial'
	ctx.strokeStyle = 'white'
	ctx.strokeText(`FPS: ${Math.floor((global.deltaTime / 1000) * 3600)}`, 10, 40)

	battle.render()
}

const control = (): void => {
	const xAxis: number =
		+Keyboard.isPress(Key.RIGHT) - +Keyboard.isPress(Key.LEFT)
	const yAxis = +Keyboard.isPress(Key.DOWN) - +Keyboard.isPress(Key.TOP)

	if (xAxis || yAxis) {
		const speed = (cameraSpeed * global.deltaTime) / 1000 / global.cam.zoom
		Camera.move({ x: xAxis * speed, y: yAxis * speed })
	}
}

const loop = (): void => {
	const now = new Date().getTime()
	global.deltaTime = now - global.prev
	global.prev = now

	animCallback.forEach((callback: Coroutine, index) => {
		const { done } = callback.generator.next()
		if (done) {
			console.log('done', done)
			callback.onDone()

			console.log(animCallback)
			animCallback.splice(index, 1)
			console.log(animCallback)
		}
	})

	control()
	render()

	window.requestAnimationFrame(loop)
}

const init = (): void => {
	global.prev = new Date().getTime()
	// Resize canvas and focus to center
	Canvas.resize()
	Camera.focus({ x: 0 + 300, y: 0 + 200 })
	Keyboard.bindEvent()
	window.addEventListener('resize', Canvas.resize)
	window.addEventListener('wheel', (event) => {
		Camera.zoom(event)
	})

	window.requestAnimationFrame(loop)
}

init()
