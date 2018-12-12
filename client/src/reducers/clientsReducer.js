export default function clientsReducer(state = {loading: false, clients: [], user: {}}, action) {
  switch (action.type) {
    case 'AUTHENTICATING':
      return {...state, loading: true}
    case 'USER_LOGIN':
      return {...state, loading: false, user: {name: action.user.name, email: action.user.email, dogs: action.user.dogs}}
    default:
      return state
  }
}


// user object example
// user = {
//   name: 'name',
//   email: 'email',
//   dogs: [{name: 'name', breed: 'breed', training_notes: 'notes'}]
// }
