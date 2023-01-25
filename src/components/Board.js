import Square from './Square'
import { useGame } from '../context/gameContext'
import { shuffleTropes } from '../utils/general-utils'
import { horrorTropes } from '../data/horror-tropes'
import { actionTropes } from '../data/action-tropes'
import { scifiTropes } from '../data/sci-fi-tropes'

export default function Board() {
  const { board, setBoard, genre, playing, setPlaying } = useGame()

  const handleChangeGenre = () => {
    setPlaying(false)
  }

  const handleNewBoard = () => {
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
  console.log('genre:', genre)

  return (
    <>
      {playing && (
        <div className="homepage">
          <h1>{` B ${genre} Movie Bingo`}</h1>
          <div id="board-button-box">
            <button onClick={handleChangeGenre}>Change Genre</button>
            <button onClick={handleNewBoard}>Shuffle Board</button>
          </div>
          <div className="board">
            {board.map((inner) =>
              inner.map((trope, i) => {
                return <Square key={i} trope={trope} />
              }),
            )}
          </div>
        </div>
      )}
    </>
  )
}
