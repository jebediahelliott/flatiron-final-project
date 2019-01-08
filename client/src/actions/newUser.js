function newUser() {
  return (dispatch, userInfo) => {
    let token = localStorage.getItem('auth_token')
    fetch('/users', {
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      method: 'POST',
      body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(res => {
      dispatch({type: 'NEW_USER', newUser: res})
    })
  }
}

export default newUser
