import Camera from "./Camera";

const A = (2 * Math.PI) / 6;

export const clearScreen = (): void => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

export const drawHex = (hex: Hexagon, color: string = "white") => {
  const { x, y, size } = Camera.inCam(hex);
  ctx.beginPath();
  for (var i = 0; i < 6; i++) {
    ctx.lineTo(x + size * Math.sin(A * i), y + size * Math.cos(A * i));
  }
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
};

export const drawRect = (rect: Rect) => {
  const { x, y, width, height } = Camera.inCam(rect);
  ctx.fillStyle = "white";
  ctx.fillRect(x, y, width, height);
};

export const drawText = (text: string, pos: Pos, color: string = 'black'): void => {
  const { x, y } = Camera.inCam(pos)
  ctx.font = '20px Arial'
  ctx.fillStyle = color
  ctx.fillText(text, x, y)
}

const Draw = {
  clearScreen,
  drawHex,
  drawRect,
  drawText
};

export default Draw;
