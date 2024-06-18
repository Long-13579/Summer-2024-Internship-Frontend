export const checkLineClamp = (element, lineCount) => {
  if (element) {
    const lineHeight = parseInt(getComputedStyle(element).lineHeight, 10)
    const maxHeight = lineHeight * lineCount
    return element.scrollHeight > maxHeight
  }
  return false
}
