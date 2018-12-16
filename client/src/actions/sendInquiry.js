function sendInquiry() {
  return (inquiry) => {
    fetch('/inquiry', {
      headers: {
        "Content-Type": "application/json"
      },
      method: 'post',
      body: JSON.stringify(inquiry)
    })
    .then(res => res.json())
    .then(res => {
      //display confirmation
    })
  }
}

export default sendInquiry;
