export const SET_FIRST_NAME = "SET_FIRST_NAME"
export const SET_LAST_NAME = "SET_LAST_NAME"

export const SET_EMAIL_ADDR = "SET_EMAIL_ADDR"
export const SET_PASSWORD = "SET_PASSWORD"

export const setName = (type, text) => {
  return {
    type: type,
    text: text
  }
}