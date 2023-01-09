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

const axialSubtract = (a: Hex, b: Hex): Hex => {
  return {
    q: a.q - b.q,
    r: a.r - b.r
  }
}

const axialNeighbor = (hex: Hex, dir: number) => {
  return axialAdd(hex, axialDirection(dir))
}

const axialDistance = (hexStart: Hex, hexEnd: Hex): number => {
  const vec = axialSubtract(hexStart, hexEnd)
  return (Math.abs(vec.q) + Math.abs(vec.q + vec.r) + Math.abs(vec.r)) / 2
}

const getAxialNeighbors = (hex: Hex): Array<Hex> => {
  let neighbors = []
  for (let i = 0; i < 6; i++) {
    neighbors.push(axialNeighbor(hex, i))
  }
  return neighbors
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

const hexToPixel = (hex: Hex): Pos => {
  return {
    x: HEX_SIZE * (Math.sqrt(3) * hex.q + (Math.sqrt(3) / 2) * hex.r),
    y: HEX_SIZE * ((3 / 2) * hex.r)
  }
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

const lerp = (a: number, b: number, t: number) => {
  return a + (b - a) * t
}

const Hexagon = {
  axialDistance,
  axialNeighbor,
  getAxialNeighbors,
  cubeToAxial,
  axialToCube,
  cubeRound,
  axialRound,
  pixelToHex,
  hexToPixel,
  axialToStore,
  lerp
}

export default Hexagon