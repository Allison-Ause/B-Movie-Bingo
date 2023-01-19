export function shuffleTropes(tropes) {
  return tropes.sort(() => 0.5 - Math.random()).splice(0, 25)
}
