import Square from './Square'
import { useGame } from '../context/gameContext'

export default function Board() {
  const { board, genre, playing, setPlaying } = useGame()

  const handleChangeGenre = () => {
    setPlaying(false)
  }

  const handleNewBoard = () => {
    // shuffle board
  }

  return (
    <>
      {playing && (
        <div className="homepage">
          <h1>{` B ${genre} Movie Bingo`}</h1>
          <div id="board-button-box">
            <button onClick={handleChangeGenre}>Change Genre</button>
            <button>Shuffle Board</button>
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
