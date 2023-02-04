import { useState } from 'react'

export default function Square({ trope }) {
  const [isDobbed, setIsDobbed] = useState(false)
  return (
    <div className="square" onClick={() => setIsDobbed(!isDobbed)}>
      <div className={isDobbed ? 'dobbed' : ''}>
        <p className="trope-text">{trope}</p>
      </div>
    </div>
  )
}
