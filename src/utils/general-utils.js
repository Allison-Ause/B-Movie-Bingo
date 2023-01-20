// tropes is an array of strings
export function shuffleTropes(tropes) {
  const newList = tropes.slice()
  const shuffled = newList.sort(() => 0.5 - Math.random()).splice(0, 24)
  shuffled.splice(12, 0, 'BLANK SQUARE')
  const rowOne = shuffled.splice(0, 5)
  const rowTwo = shuffled.splice(0, 5)
  const rowThree = shuffled.splice(0, 5)
  const rowFour = shuffled.splice(0, 5)
  const rowFive = shuffled
  return [rowOne, rowTwo, rowThree, rowFour, rowFive]
}
