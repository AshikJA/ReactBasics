import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { EditContact } from './EditContactClass'


export default function EditContactWrapper(props) {
  const navigate = useNavigate()
  const location = useLocation();
  return <EditContact {...props} location={location} navigate={navigate} />

}
