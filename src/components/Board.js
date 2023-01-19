import { actionTropes } from '../data/action-tropes'
import Square from './Square'

export default function Board() {
  return (
    <div>
      <p>Board Display Here</p>
      <div>
        {actionTropes.map((trope, i) => {
          return <Square key={i} trope={trope} />
        })}
      </div>
    </div>
  )
}
