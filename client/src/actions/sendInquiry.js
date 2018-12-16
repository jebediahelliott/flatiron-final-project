function sendInquiry() {
  return (inquiry) => {
    fetch('/inquiries', {
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
