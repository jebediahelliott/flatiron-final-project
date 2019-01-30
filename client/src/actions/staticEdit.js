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
      debugger
        const obj = {}
        obj.id = res.id
        obj.title = res.title
        const pars = {}
        res.paragraphs.forEach((par, idx) => pars[idx] = par)
        obj.paragraphs_attributes = pars
      dispatch({type: 'UPDATE_PAGES', newData: obj, index: index})
    })

  }
}

export default staticEdit
