import { SET_FIRST_NAME, SET_LAST_NAME } from './actions.js'

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST_NAME:
      return Object.assign({}, state, { firstName: action.text })
    case SET_LAST_NAME:
      return Object.assign({}, state, { lastName: action.text })
    default:  
      return state
  }
}

export default rootReducer