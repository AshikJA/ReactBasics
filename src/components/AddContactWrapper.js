import React from 'react'
import { useNavigate } from 'react-router-dom'
import AddContact from './AddContactClass'

export default function AddContactWrapper(props) {
  const navigate = useNavigate()
  return <AddContact {...props} navigate={navigate} />

}
