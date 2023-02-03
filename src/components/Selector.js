import { useGame } from '../context/gameContext'
import { actionTropes } from '../data/action-tropes'
import { horrorTropes } from '../data/horror-tropes'
import { scifiTropes } from '../data/sci-fi-tropes'
import { shuffleTropes } from '../utils/general-utils'

export default function Selector() {
  const { setPlaying, genre, setGenre, setBoard } = useGame()

  const handleSelection = (e) => {
    setGenre(e.target.value)
    console.log('changed genre')
  }

  const handleClick = () => {
    setPlaying(true)
    switch (genre) {
      case 'Horror':
        setBoard(shuffleTropes(horrorTropes))
        break
      case 'Action':
        setBoard(shuffleTropes(actionTropes))
        break
      case 'Sci-Fi':
        setBoard(shuffleTropes(scifiTropes))
        break
      default:
        throw new Error('Must select genre to proceed.')
    }
  }

  return (
    <div>
      <p>Select a Genre</p>
      <select onChange={handleSelection}>
        <option value={'Horror'}>Horror</option>
        <option value={'Action'}>Action</option>
        <option value={'Sci-Fi'}>Sci-Fi</option>
      </select>
      <button onClick={handleClick}>Create Board</button>
    </div>
  )
}
