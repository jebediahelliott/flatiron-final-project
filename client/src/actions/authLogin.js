function authLogin() {
  return (dispatch, login) => {
    dispatch({type: 'AUTHENTICATING'})
    fetch('/authenticate',{
      headers: {
        "Content-Type": "application/json"
      },
      method: 'post',
      body: JSON.stringify(login)
    })
    .then(res => res.json())
    .then(res => {
      fetch(`/users/${res.user.id}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${res.auth_token}`
        }
      })
      .then(res => res.json())
      .then(res => {
        debugger
      })
    })
  }

}

export default authLogin;
