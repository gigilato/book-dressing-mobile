import Colorstring from 'color-string'

export const getRgbaColor = (colorString: string) => {
  const color = Colorstring.get.rgb(colorString)
  if (!color) throw new Error('not a color')
  return color
}
export const getRgbaCode = (hexColor: string) => {
  const [r, g, b, a] = getRgbaColor(hexColor)
  return `rgba(${r},${g},${b},${a})`
}
export const updateColorOpacity = (color: string, opacity: number): string => {
  const [r, g, b] = getRgbaColor(color)
  const updatedColor = Colorstring.to.rgb(r, g, b, opacity)
  return updatedColor
}
