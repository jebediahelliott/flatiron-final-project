import React from 'react'

const FAQ = props => {
  const pcontent = props.content[1].paragraphs.map(p => <p key={p.id}>{p.content}</p>)
  return (
    <div className='staticLayout'>
      <h1>{props.content[1].title}</h1>
      {pcontent}
    </div>
  )
}

export default FAQ;
