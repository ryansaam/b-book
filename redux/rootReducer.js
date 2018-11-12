import { USERNAME_INPUT } from './actions.js'

const initialState = {
  username: ""
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERNAME_INPUT:
      return Object.assign({}, state, { username: action.text })
    default:  
      return state
  }
}

export default rootReducer