import Camera from "./Camera";

const A = (2 * Math.PI) / 6;

export const clearScreen = (): void => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

export const Hex = (hex: Hexagon, color: string = "white") => {
  const { x, y, size } = Camera.hexInCam(hex);
  ctx.beginPath();
  for (var i = 0; i < 6; i++) {
    ctx.lineTo(x + size * Math.sin(A * i), y + size * Math.cos(A * i));
  }
  ctx.closePath();
  ctx.strokeStyle = color;
  ctx.stroke();
};

export const Rect = (rect: Rect) => {
  const { x, y, width, height } = Camera.rectInCam(rect);
  ctx.fillStyle = "white";
  ctx.fillRect(x, y, width, height);
};

const Draw = {
  clearScreen,
  Hex,
  Rect,
};

export default Draw;
