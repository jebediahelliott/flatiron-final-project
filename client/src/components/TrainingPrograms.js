import React from 'react'

const TrainingPrograms = props => {
  const pcontent = props.content[3].paragraphs.map(p => <p key={p.id}>{p.content}</p>)
  return (
    <div className='staticLayout'>
      <h1>{props.content[3].title}</h1>
      {pcontent}
    </div>
  )
}

export default TrainingPrograms;
