export default function userReducer(state = {}, action) {
  switch (action.type) {
    case 'AUTHENTICATING':
      return {...state, loading: true}
    case 'USER_LOGIN':
      return {...state, loading: false, user: {name: action.user.name, email: action.user.email, dogs: action.user.dogs}}
    case 'NEW_USER':
      state.clients.push(action.newUser)
      return {...state, loading: false, clients: state.clients}
    case 'UPDATE_USER':
      let index = state.clients.findIndex(client => client.id === action.updateUser.id)
      state.clients[index] = action.updateUser
      return {...state, loading: false, clients: state.clients}
    case 'DELETE_USER':
      let clients = state.clients.filter(client => client.id !== action.id)
      return {...state, loading: false, clients: clients}
    case 'ADMIN_LOGIN':
      return {...state, loading: false, user: {name: action.user.name, email: action.user.email, isAdmin: action.user.is_admin}}
    case 'LOAD_CLIENTS':
      return {...state, loading: false, clients: action.clients}
    case 'LOGOUT':
      return {loading: false}
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
