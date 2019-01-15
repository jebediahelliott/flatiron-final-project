
// Get information for all users
function fetchUsers(token, dispatch) {
  fetch('/users', {
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    }
  })
  .then(res => res.json())
  .then(res => {
    dispatch({type: 'LOAD_CLIENTS', clients: res})
  })
}
// Get information for an individual user
function fetchUser(id, token, dispatch) {
  fetch(`/users/${id}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    }
  })
  .then(res => res.json())
  .then(res => {
    dispatch({type: 'USER_LOGIN', user: res})
  })
}

// Check credentials and make follow up request based on admin/nonadmin login
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
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Invalid Credentials');
      }
    })
    .then(res => {
      localStorage.setItem("auth_token",`${res.auth_token}`)
      if (res.user.is_admin) {
        dispatch({type: 'ADMIN_LOGIN', user: res.user})
        fetchUsers(res.auth_token, dispatch)
      }else {
        fetchUser(res.user.id, res.auth_token, dispatch)
      }
    })
    .catch(error => {
      alert(error)
    })
  }
}

export default authLogin;
