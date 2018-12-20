function logout() {
  return (dispatch) => {
    dispatch({type: 'LOGOUT'})
  }
}

export default logout;
