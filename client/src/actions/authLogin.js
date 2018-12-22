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
      localStorage.setItem("auth_token",`${res.auth_token}`)
      if (res.user.isAdmin) {
        dispatch({type: 'ADMIN_LOGIN', user: res.user})
        fetch('/users', {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `${res.auth_token}`
          }
        })
        .then(res => res.json())
        .then(res => {
          dispatch({type: 'LOAD_CLIENTS', clients: res})
        })
      }else {
        fetch(`/users/${res.user.id}`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `${res.auth_token}`
          }
        })
        .then(res => res.json())
        .then(res => {
          dispatch({type: 'USER_LOGIN', user: res})
        })
      }
    })
  }

}

export default authLogin;
