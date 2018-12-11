function authLogin() {
  return (dispatch, login) => {
    dispatch({type: 'AUTHENTICATING'})
    fetch('api/login',{
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(login)
    })
    .then(res => res.json())
    .then(dispatch({type: 'USER_AUTHORIZED'}))
  }

}

export default authLogin;
