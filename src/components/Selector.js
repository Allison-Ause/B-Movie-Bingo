import { useGame } from '../context/gameContext'
import { actionTropes } from '../data/action-tropes'
import { horrorTropes } from '../data/horror-tropes'
import { scifiTropes } from '../data/sci-fi-tropes'
import { shuffleTropes } from '../utils/general-utils'

export default function Selector() {
  const { setPlaying, genre, setGenre, setBoard } = useGame()

  const handleSelection = (e) => {
    setGenre(e.target.value)
    switch (genre) {
      case 'action':
        setBoard(shuffleTropes(actionTropes))
        break
      case 'horror':
        setBoard(shuffleTropes(horrorTropes))
        break
      case 'sci-fi':
        setBoard(shuffleTropes(scifiTropes))
        break
      default:
        throw new Error('Must select genre to proceed.')
    }
    setBoard(shuffleTropes())
  }
  const handleClick = () => {
    setPlaying(true)
  }

  return (
    <div>
      <p>Select a Genre</p>
      <select onChange={handleSelection}>
        <option value={'horror'}>Horror</option>
        <option value={'action'}>Action</option>
        <option value={'sci-fi'}>Sci-Fi</option>
      </select>
      <button onClick={handleClick}>Create Board</button>
    </div>
  )
}
