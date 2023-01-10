import Hex from "../modules/Hex"

const axialDirectionVector: AxialHex[] = [
  { q: +1, r: 0 }, { q: +1, r: -1 }, { q: 0, r: -1 },
  { q: -1, r: 0 }, { q: -1, r: +1 }, { q: 0, r: +1 }
]

const axialDirection = (dir: number): AxialHex => {
  return axialDirectionVector[dir]
}

const axialAdd = (hex: AxialHex, vec: AxialHex): AxialHex => {
  return {
    q: hex.q + vec.q,
    r: hex.r + vec.r
  }
}

const axialSubtract = (a: AxialHex, b: AxialHex): AxialHex => {
  return {
    q: a.q - b.q,
    r: a.r - b.r
  }
}

const axialNeighbor = (hex: AxialHex, dir: number) => {
  return axialAdd(hex, axialDirection(dir))
}

const axialDistance = (hexStart: AxialHex, hexEnd: AxialHex): number => {
  const vec = axialSubtract(hexStart, hexEnd)
  return (Math.abs(vec.q) + Math.abs(vec.q + vec.r) + Math.abs(vec.r)) / 2
}

const getAxialNeighbors = (hex: AxialHex): Array<AxialHex> => {
  let neighbors = []
  for (let i = 0; i < 6; i++) {
    neighbors.push(axialNeighbor(hex, i))
  }
  return neighbors
}

const getHexSize = (): number => HEX_SIZE * cam.zoom

const cubeToAxial = (cube: CubeHex): AxialHex => {
  const q = cube.q
  const r = cube.r
    return { q, r }
}

const axialToCube = (hex: AxialHex): CubeHex => {
  const q = hex.q
  const r = hex.r
  const s = - q - r
  return { q, r, s }
}

const cubeRound = (cube: CubeHex): CubeHex => {
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

const axialRound = (hex: AxialHex): AxialHex => {
  return cubeToAxial(cubeRound(axialToCube(hex)))
}

const hexToPixel = (hex: AxialHex): Pos => {
  return {
    x: HEX_SIZE * (Math.sqrt(3) * hex.q + (Math.sqrt(3) / 2) * hex.r),
    y: HEX_SIZE * ((3 / 2) * hex.r)
  }
}

const pixelToHex = (pointer: Pos): AxialHex => {
  const q = (Math.sqrt(3)/3 * pointer.x  -  1./3 * pointer.y) / getHexSize()
  const r = (                           2./3 * pointer.y) / getHexSize()

  return axialRound({ q, r })
}

const axialToStore = (hex: AxialHex): AxialHex => {
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