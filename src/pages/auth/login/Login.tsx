import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const nav = useNavigate();
  
  const handleBackToHomepage = () => {
    nav('/');
  }

  return (
    <div>
      <p>login</p>
      <button onClick={() => handleBackToHomepage()}>Back To homepage</button>
    </div>
  )
}

export default Login
