import React from 'react'
import Contacts from './Contacts'
import Personalinfo from './Personalinfo'
import Experience from './Experience'
import './UserCV.css'

const UserCV = () => {
  return (
    <div className = 'car'>
      <Personalinfo/>
      <Experience/>
      <Contacts/>
    </div>
    
  )
}

export default UserCV