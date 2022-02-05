import { createContext, useReducer } from 'react'
import ApexReducer from './ApexReducer'

const ApexContext = createContext()

export const ApexProvider = ({ children }) => {
  const initialState = {
    servers: {},
    player: {},
    loading: false,
  }

  const [state, dispatch] = useReducer(ApexReducer, initialState)

  return (
    <ApexContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </ApexContext.Provider>
  )
}

export default ApexContext
