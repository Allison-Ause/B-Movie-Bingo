import { useState } from 'react'

export default function Square({ trope }) {
  const [isDobbed, setIsDobbed] = useState(false)
  console.log('isDobbed:', isDobbed)
  return (
    <div
      className={isDobbed ? 'dobbed' : 'square'}
      onClick={() => setIsDobbed(!isDobbed)}
    >
      <p className="trope-text">{trope}</p>
    </div>
  )
}
