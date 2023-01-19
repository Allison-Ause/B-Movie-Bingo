import { shuffleTropes } from '../utils/general-utils'
import { actionTropes } from '../data/action-tropes'
import Square from './Square'

export default function Board() {
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
