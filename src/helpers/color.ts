import COLORS from "../constants/ColorConstants"

const getRandomColor = (): string => {
  let color = 'white'

  const colors = Object.values(COLORS)
  color = colors[Math.round(Math.random() * colors.length)] || 'white'

  return color
}

export default {
  getRandomColor
}