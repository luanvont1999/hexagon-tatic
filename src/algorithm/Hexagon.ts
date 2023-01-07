import Hex from "../modules/Hex"

const axialDirectionVector: Hex[] = [
  { q: +1, r: 0 }, { q: +1, r: -1 }, { q: 0, r: -1 },
  { q: -1, r: 0 }, { q: -1, r: +1 }, { q: 0, r: +1 }
]

const axialDirection = (dir: number): Hex => {
  return axialDirectionVector[dir]
}

const axialAdd = (hex: Hex, vec: Hex): Hex => {
  return {
    q: hex.q + vec.q,
    r: hex.r + vec.r
  }
}

const axialNeighbor = (hex: Hex, dir: number) => {
  return axialAdd(hex, axialDirection(dir))
}

const getHexSize = (): number => HEX_SIZE * cam.zoom

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

const pixelToHex = (pointer: Pos): Axial => {
  const q = (Math.sqrt(3)/3 * pointer.x  -  1./3 * pointer.y) / getHexSize()
  const r = (                           2./3 * pointer.y) / getHexSize()

  return axialRound({ q, r })
}

const axialToStore = (hex: Axial): Axial => {
  return {
    r: hex.r,
    q: hex.q + Math.floor(hex.r / 2)
  }
}

const Hexagon = {
  axialNeighbor,
  cubeToAxial,
  axialToCube,
  cubeRound,
  axialRound,
  pixelToHex,
  axialToStore,
}

export default Hexagon