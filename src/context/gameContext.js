import { createContext, useContext } from 'react'

const GameContext = createContext()

const GameContextProvider = ({ children }) => {
  return <GameContext.Provider>{children}</GameContext.Provider>
}

const useGame = () => {
  const context = useContext(GameContext)
  if (context === undefined) {
    throw new Error('useGame must be contained within a GameContextProvider')
  }
  return context
}

export { GameContextProvider, useGame }
