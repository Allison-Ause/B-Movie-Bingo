import { useGame } from '../context/gameContext.js'
import Board from './Board.js'
import Selector from './Selector.js'

export default function Homepage() {
  const { playing } = useGame()
  return <div>{playing ? <Board /> : <Selector />}</div>
}
