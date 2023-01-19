import { shuffleTropes } from '../utils/general-utils'
import { actionTropes } from '../data/action-tropes'
import Square from './Square'

export default function Board() {
  console.log('actionTropes:', actionTropes)
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
