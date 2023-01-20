import Square from './Square'
import { useGame } from '../context/gameContext'

export default function Board() {
  const { board } = useGame()
  return (
    <div className="homepage">
      <h1>Board Display Here</h1>
      <div className="board">
        {board.map((inner) =>
          inner.map((trope, i) => {
            return <Square key={i} trope={trope} />
          }),
        )}
      </div>
    </div>
  )
}

// {board.map((trope, i) => {
//   return <Square key={i} trope={trope} />
// })}
