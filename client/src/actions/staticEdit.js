function staticEdit() {
  return (id, editInfo, dispatch) => {
    fetch(`/static_pages/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${localStorage.auth_token}`
      },
      method: 'put',
      body: JSON.stringify(editInfo)
    })
    .then(res => res.json())
    .then(res => {
      debugger
    })

  }
}

export default staticEdit
