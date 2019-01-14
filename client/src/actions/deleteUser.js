function deleteUser() {
  return (dispatch, userInfo) => {
    let token = localStorage.getItem('auth_token')
    fetch(`/users/${userInfo.user.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      method: 'DELETE',
    })
    .then(res => {
      if (res.ok) {
        dispatch({type: 'DELETE_USER', id: userInfo.user.id})
      }else {
        alert('Unable to Delete')
      }
    })
  }
}

export default deleteUser
