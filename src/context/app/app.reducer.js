import { types } from './app.types';

export const appReducer = ( state, action ) => {
  switch(action.type) {
    case types.SET_AUTH_BACKGROUND: 
      return { ...state, authBackground: action.payload }
    default: 
      return state;
  }
}