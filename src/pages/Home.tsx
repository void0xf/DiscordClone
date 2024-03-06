import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const nav = useNavigate();
  
  const handleBackToHomepage = () => {
    nav('/login');
  }

  return (
    <div>
      <p>Discord Page</p>
      <button onClick={() => handleBackToHomepage()}>Login</button>
    </div>
  )
}

export default Home
