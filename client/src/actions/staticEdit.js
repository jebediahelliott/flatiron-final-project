function staticEdit() {
  return (id, editInfo, dispatch, index) => {
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
      dispatch({type: 'UPDATE_PAGES', newData: res, index: index})
    })

  }
}

export default staticEdit
