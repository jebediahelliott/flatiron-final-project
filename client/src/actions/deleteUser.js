function deleteUser() {
  return (dispatch, userInfo) => {
    let token = localStorage.getItem('auth_token')
    fetch(`/users/${userInfo.user.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      method: 'DELETE',
      body: JSON.stringify(userInfo)
    })
    dispatch({type: 'DELETE_USER', id: userInfo.user.id})
  }
}

export default deleteUser
