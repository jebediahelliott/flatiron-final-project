function deleteParagraph() {
  return (dispatch, id, parentId) => {
    let token = localStorage.getItem('auth_token')
    fetch(`/paragraphs/${id}`,{
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      method: 'DELETE',
    })
    .then(res => {
      console.log(res)
      if (res.ok) {
        dispatch({type: 'DELETE_PARAGRAPH', id: id, parentId: parentId})
      }else {
        alert('Could not be deleted')
      }
    })
  }
}

export default deleteParagraph
