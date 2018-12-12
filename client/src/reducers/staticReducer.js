export default function clientsReducer(state = {pages: []}, action) {
  switch (action.type) {
    case 'LOAD_PAGES':
        return {pages: action.pages}
    default:
      return state
  }
}
