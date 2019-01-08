function updateUser() {
  return (dispatch, userInfo) => {
    let token = localStorage.getItem('auth_token')
    fetch(`/users/${userInfo.user.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      method: 'PUT',
      body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(res => {
      dispatch({type: 'UPDATE_USER', updateUser: res})
    })
  }
}

export default updateUser
