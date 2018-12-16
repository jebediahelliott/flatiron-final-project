import React from 'react'

const About = props => {
  const pcontent = props.content[0].paragraphs.map(p => <p key={p.id}>{p.content}</p>)
  return (
    <div className='staticLayout'>
      <h1>{props.content[0].title}</h1>
      {pcontent}
    </div>
  )
}

export default About;
