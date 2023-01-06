import Hex from "../modules/Hex"

const cubeToAxial = (cube: Cube): Axial => {
  const q = cube.q
  const r = cube.r
    return { q, r }
}

const axialToCube = (hex: Axial): Cube => {
  const q = hex.q
  const r = hex.r
  const s = - q - r
  return { q, r, s }
}

const cubeRound = (cube: Cube): Cube => {
  let q = Math.round(cube.q)
  let r = Math.round(cube.r)
  let s = Math.round(cube.s)

  const q_diff = Math.abs(q - cube.q)
  const r_diff = Math.abs(r - cube.r)
  const s_diff = Math.abs(s - cube.s)

  if (q_diff > r_diff && q_diff > s_diff) {
    q = -r - s
  }
  else if (r_diff > s_diff) {
    r = -q - s
  }
  else {
    s = -q - r
  }

  return { q, r, s }
}

const axialRound = (hex: Axial): Axial => {
  return cubeToAxial(cubeRound(axialToCube(hex)))
}

const pixelToHex = (pointer: Hexagon): Axial => {
  const q = (Math.sqrt(3)/3 * pointer.x  -  1./3 * pointer.y) / pointer.size
  const r = (                           2./3 * pointer.y) / pointer.size

  return axialRound({ q, r })
}

const axialToStore = (hex: Axial): Axial => {
  return {
    r: hex.r,
    q: hex.q + Math.floor(hex.r / 2)
  }
}

const Hexagon = {
  cubeToAxial,
  axialToCube,
  cubeRound,
  axialRound,
  pixelToHex,
  axialToStore,
}

export default Hexagon