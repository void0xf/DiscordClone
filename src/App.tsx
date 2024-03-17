import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import React from 'react';
import Login from './pages/auth/login/Login';
import Me from './pages/app/me/Me';
import Register from './pages/auth/login/Register';
import Home from './pages/Home/Home';

const App: React.FC = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/channels/@me' element={<Me />}/>
      </Routes>
    </Router>
  );
}


export default App
