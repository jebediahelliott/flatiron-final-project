export default function staticReducer(state = [], action) {
  switch (action.type) {
    case 'UPDATE_PAGES':
      state[action.index] = action.newData
      console.log(state)
      return state
    default:
      return state
  }
}
