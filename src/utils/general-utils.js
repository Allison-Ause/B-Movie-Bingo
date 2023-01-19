function shuffleTropes(tropes) {
  const shuffled = tropes.sort(() => 0.5 - Math.random()).splice(0, 24)
  console.log('shuffled:', shuffled)
  shuffled.splice(12, 0, 'BLANK SQUARE')
  console.log('shuffled2:', shuffled)
  return shuffled
}

shuffleTropes([
  'three moustaches',
  'shooting while jumping',
  'mano y mano',
  'unnecessary female nudity',
  'I am too old for this shit',
  'eye gouge',
  'flying kick or roundhouse',
  'car bomb',
  'bone crunch',
  'drive through mall or building',
  'high fall',
  'hero cut above eyebrow',
  'love scene',
  'lone wolf attitude',
  'wasting a crowd',
  'stair fall',
  'partner injured or killed',
  'oiled up',
  'car, boat or foot chase',
  'impaled, stabbed or shot with arrow',
  'smash through window or wall',
  '"we had a deal!" or "see you in hell!"',
  'home invasion or funeral',
  'crash and burn',
  'big fan or tv reporter',
  'chain or whip fight',
  'burning human or animal',
  'dragged',
  'helicopter dangle',
  'suspended from the force',
  'shooting from the hip',
])
