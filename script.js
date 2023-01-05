const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')

const A = 2 * Math.PI / 6
const R = 50

let select = null
let hover = null

function drawHexagon(q, r) {
  const x = R * (Math.sqrt(3) * q + Math.sqrt(3) / 2 * r)
  const y = R * (                             3. / 2 * r)

  const active = q === select?.q && r === select?.r
  const isHover = q === hover?.q && r === hover?.r

  ctx.beginPath();
  for (var i = 0; i < 6; i++) {
    ctx.lineTo(x + R * Math.sin(A * i), y + R * Math.cos(A * i));
  }
  ctx.closePath();
  if (isHover) {
    ctx.fillStyle = 'gray'
    ctx.fill();
  } if (active) {
    ctx.fillStyle = 'black'
    ctx.fill();
  } else {
    ctx.stroke();
  }
}

const render = () => {
  ctx.clearRect(0, 0, 800, 600)
  for(let q = 0; q < 10; q++) {
    for (let r = 0; r < 10; r++) {
      drawHexagon(q, r)
    }
  }
}

const loop = () => {
  render()

  window.requestAnimationFrame(loop)
}

loop()

canvas.addEventListener('click', (event) => {
  const { offsetX: x, offsetY: y } = event

  const q = (Math.sqrt(3) / 3 * x - 1. / 3 * y) / R
  const r = (                       2. / 3 * y) / R
  select = { q: Math.round(q), r: Math.round(r) }
})

canvas.addEventListener('mousemove', (event) => {
  const { offsetX: x, offsetY: y } = event

  const q = (Math.sqrt(3) / 3 * x - 1. / 3 * y) / R
  const r = (                       2. / 3 * y) / R
  hover = { q: Math.round(q), r: Math.round(r) }
})