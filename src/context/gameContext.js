import { createContext, useContext } from 'react'

const GameContext = createContext()

const GameContextProvider = ({ children }) => {
  // TODO: Create board state
  return <GameContext.Provider value={{}}>{children}</GameContext.Provider>
}

const useGame = () => {
  const context = useContext(GameContext)
  if (context === undefined) {
    throw new Error('useGame must be contained within a GameContextProvider')
  }
  return context
}

export { GameContextProvider, useGame }
