export default function staticReducer(state = [], action) {
  switch (action.type) {
    case 'UPDATE_PAGES':
      state[action.index] = action.newData
      return [...state]
    case 'DELETE_PARAGRAPH':
      let idx = state.findIndex(obj => obj.id === action.parentId)
      let pages = state.filter(page => page.id === action.parentId)
      let paragraphs = pages[0].paragraphs.filter(paragraph => paragraph.id !== action.id)
      state[idx].paragraphs = paragraphs
      return [...state]
    default:
      return state
  }
}
