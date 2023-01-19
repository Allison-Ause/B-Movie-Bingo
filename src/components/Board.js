import { actionTropes } from '../data/action-tropes'
import { shuffleTropes } from '../utils/general-utils'
import Square from './Square'

export default function Board() {
  return (
    <div>
      <p>Board Display Here</p>
      <div>
        {shuffleTropes(actionTropes).map((trope, i) => {
          return <Square key={i} trope={trope} />
        })}
      </div>
    </div>
  )
}
