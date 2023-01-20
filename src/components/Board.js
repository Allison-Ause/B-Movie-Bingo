import { shuffleTropes } from '../utils/general-utils'
import { actionTropes } from '../data/action-tropes'
import Square from './Square'
import { useGame } from '../context/gameContext'

export default function Board() {
  const { board } = useGame()
  return (
    <div class="homepage">
      <h1>Board Display Here</h1>
      <div className="board">
        {shuffleTropes(actionTropes).map((trope, i) => {
          return <Square key={i} trope={trope} />
        })}
      </div>
    </div>
  )
}
