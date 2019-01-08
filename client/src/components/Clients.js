import React from 'react'
import { Link } from 'react-router-dom'
import './Client.css'
import { Button } from 'react-bootstrap'



const Clients = props => {
  let clients
  if (props.clients) {
    clients = props.clients.filter(client => client.is_admin !== true).map(client => {
      return (
        <div className='clientCard' key={client.id}>
          <Link to={`${props.match.path}/${client.name}`} onClick={() => props.clientSelector(client)}><h3>{client.name}</h3></Link>
        </div>
      )
    })
  }
  return (
    <div className='staticLayout'>
      {props.clients ? clients : null}
      <Link to='/admin/new'><Button>New Client</Button></Link>
    </div>
  )
}


export default Clients
