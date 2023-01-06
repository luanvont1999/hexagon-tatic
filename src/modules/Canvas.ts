export const resize = () => {
  const parent = canvas.parentElement
  if (parent) {
    const {width, height} = parent.getBoundingClientRect()

    canvas.width = width
    canvas.height = height
  }
}

export const getCenter = (): Pos => {
  return {
    x: canvas.width / 2,
    y: canvas.height / 2
  }
}

const Canvas = {
  resize,
  getCenter
}

export default Canvas