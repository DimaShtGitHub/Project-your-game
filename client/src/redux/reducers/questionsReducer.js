import { initState } from "../initState";

export const questionsReducer = (state = initState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_QUESTION':
      return payload

    default:
      return state
  }
}
