// tropes is an array of strings
export function shuffleTropes(tropes) {
  const newList = tropes.slice()
  const shuffled = newList.sort(() => 0.5 - Math.random()).splice(0, 24)
  shuffled.splice(12, 0, 'BLANK SQUARE')
  return shuffled
}
