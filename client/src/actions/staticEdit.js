function staticEdit() {
  return (info) => {
    fetch(`/static_pages${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: 'patch',
      body: JSON.stringify(info)
    })
    .then(res => res.json())
    
  }
}

export default staticEdit
