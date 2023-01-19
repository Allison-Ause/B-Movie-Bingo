import { createContext, useContext, useState } from 'react'

const GameContext = createContext()

const GameContextProvider = ({ children }) => {
  // TODO: Create board state
  const [board, setBoard] = useState([
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
  ])
  return (
    <GameContext.Provider value={{ board, setBoard }}>
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
