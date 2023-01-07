import { objFilterNaN } from "../helpers"

const focus = (center: Pos): void => {
  const { width, height } = canvas
  global.cam = {
    x: center.x - width / 2,
    y: center.y - height / 2,
    zoom: 1,
    width,
    height,
  }
}

const move = (vector: Pos) => {
  global.cam = {
    ...global.cam,
    x: global.cam.x + vector.x,
    y: global.cam.y + vector.y,
  }
}

const zoom = (event: WheelEvent): void => {
  const { offsetX: x, offsetY: y, deltaY } = event
  const zoom = cam.zoom * (1 + 5 / 100 * Math.sign(deltaY))

  global.cam = {
    ...global.cam,
    zoom,
  }
}

const inCam = (res: number | Pos | Rect | Hexagon): any => {
  if (typeof res === 'number') {
    return (res * cam.zoom)
  }
  const { x, y, width, height, size} = res as Pos & Rect & Hexagon
  const target = {
    x: (x - cam.x) * cam.zoom,
    y: (y - cam.y) * cam.zoom,
    width: width * cam.zoom,
    height: height * cam.zoom,
    size: size * cam.zoom
  }

  return objFilterNaN(target)
}

const mouseCam = (event: MouseEvent): Pos => {
  return {
    x: (event.offsetX + cam.x * cam.zoom),
    y: (event.offsetY + cam.y * cam.zoom)
  }
}

const Camera = {
  focus,
  move,
  zoom,
  inCam,
  mouseCam
}

export default Camera