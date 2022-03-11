import { useReducer } from "react"
import AppContext from "./app.context"
import { appReducer } from "./app.reducer"
import { types } from "./app.types"

const AppState = ({ children }) => {
  const initialState = {
    authBackground: '/images/auth_background.jpg'
  }

  const [state, dispatch] = useReducer(appReducer, initialState); 

  const setAuthBackground = (image) => { dispatch({ type: types.SET_AUTH_BACKGROUND, payload: image })}
  
  return (
    <AppContext.Provider 
      value={{
        ...state,
        setAuthBackground
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export default AppState;