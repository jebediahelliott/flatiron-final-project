export default function staticReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_PAGES':
        return action.pages
    default:
      return state
  }
}
