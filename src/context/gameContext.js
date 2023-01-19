import { createContext, useContext, useState } from 'react'

const GameContext = createContext()

const GameContextProvider = ({ children }) => {
  const [playing, setPlaying] = useState(false)
  const [genre, setGenre] = useState('')

  const [board, setBoard] = useState([
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
  ])
  // TODO: win condition logic (option to cancel?)
  return (
    <GameContext.Provider
      value={{ board, setBoard, playing, setPlaying, genre, setGenre }}
    >
      {children}
    </GameContext.Provider>
  )
}

const useGame = () => {
  const context = useContext(GameContext)
  if (context === undefined) {
    throw new Error('useGame must be contained within a GameContextProvider')
  }
  return context
}

export { GameContextProvider, useGame }
