import { SET_FIRST_NAME, SET_LAST_NAME, SET_EMAIL_ADDR, SET_PASSWORD } from './actions.js'

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
    case SET_EMAIL_ADDR:
      return Object.assign({}, state, { email: action.text })
    case SET_PASSWORD:
      return Object.assign({}, state, { password: action.text })  
    default:  
      return state
  }
}

export default rootReducer