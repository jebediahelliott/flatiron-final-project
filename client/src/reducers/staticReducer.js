export default function staticReducer(state = [], action) {
  switch (action.type) {
    case 'UPDATE_PAGES':
      state[action.index] = action.newData
      return [...state]
    default:
      return state
  }
}
