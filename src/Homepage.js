import { useState } from 'react'
import Board from './Board.js'
import Selector from './Selector.js'

export default function Homepage() {
  const [playing, setPlaying] = useState(false)
  const [genre, setGenre] = useState('')

  return (
    <div>
      {playing ? (
        <Board />
      ) : (
        <Selector setPlaying={setPlaying} setGenre={setGenre} genre={genre} />
      )}
      <p>Text will be here!</p>
    </div>
  )
}
