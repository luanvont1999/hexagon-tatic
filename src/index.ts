import Camera from "./modules/Camera";
import Canvas from "./modules/Canvas";
import Draw from "./modules/Draw";
import "./style.css";

const CANVAS = document.createElement("canvas");
global.canvas = CANVAS;
global.ctx = CANVAS.getContext("2d");

const APP = document.createElement("div");
APP.id = "app";
APP.appendChild(CANVAS);

document.body.appendChild(APP);

const hexSize = 50

const render = (): void => {
  Draw.clearScreen();

  ctx.font = '30px Arial'
  ctx.strokeText(`FPS: ${Math.floor(global.deltaTime / 1000 * 3600)}`, 10, 40)

  for (let i = 0; i < 10; i++) {
    for (let j = 0 - Math.floor(i / 2); j < 10 - Math.floor(i / 2); j++) {
      const x = 200 + hexSize * (Math.sqrt(3) * j + (Math.sqrt(3) / 2) * i);
      const y = 200 + hexSize * ((3 / 2) * i);

      Draw.Hex({ x, y, size: hexSize })
    }
  }
};

const loop = (): void => {
  const now = new Date().getTime()
  global.deltaTime = (now - global.prev)
  global.prev = now

  render();

  window.requestAnimationFrame(loop);
};

const init = (): void => {
  global.prev = new Date().getTime()
  // Resize canvas and focus to center
  Canvas.resize();
  Camera.focus(Canvas.getCenter());
  window.addEventListener("resize", Canvas.resize);
  window.addEventListener("keydown", setupKeybinding);
  window.addEventListener("wheel", (event) => {
    Camera.zoom(event);
  });

  window.requestAnimationFrame(loop);
};

const setupKeybinding = (event: KeyboardEvent) => {
  const { code } = event
  const moveS = 100 / cam.zoom * deltaTime / 1000
  switch (code) {
    case 'KeyW':
      Camera.move({ x: 0, y: -moveS});
      break;
    case 'KeyS':
      Camera.move({ x: 0, y: moveS});
      break;
    case 'KeyA':
      Camera.move({ x: -moveS, y: 0});
      break;
    case 'KeyD':
      Camera.move({ x: moveS, y: 0});
      break;
    default:
      break;
  }
}

init();
