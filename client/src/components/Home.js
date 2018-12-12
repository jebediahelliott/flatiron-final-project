import React from 'react'
import './staticPages.css'

const Home = props => {
  return (
    <div>
      <h1>{props.content[0].title}</h1>
      <p>{props.content[0].paragraphs[0].content}</p>
    </div>
  )
}

export default Home;
