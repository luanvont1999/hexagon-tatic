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
    x: global.cam.x - vector.x,
    y: global.cam.y - vector.y,
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

const rectInCam = (rect: Rect): Rect => {
  return {
    x: (rect.x + cam.x / 2) * cam.zoom,
    y: (rect.y + cam.y / 2) * cam.zoom,
    width: rect.width * cam.zoom,
    height: rect.height * cam.zoom,
  }
}

const hexInCam = (hex: Hexagon): Hexagon => {
  return {
    x: (hex.x + cam.x / 2) * cam.zoom,
    y: (hex.y + cam.y / 2) * cam.zoom,
    size: hex.size * cam.zoom
  }
}

const Camera = {
  focus,
  move,
  zoom,
  rectInCam,
  hexInCam,
}

export default Camera