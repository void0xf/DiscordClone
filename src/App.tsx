import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import React from 'react';
import Home from './pages/Home/Home';
import Login from './pages/auth/login/Login';
import React from 'react';
import Me from './pages/app/me/Me';
import Register from './pages/auth/login/Register';

const App: React.FC = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login />} />
        <Route path='/channels/@me' element={<Me />}/>
      </Routes>
    </Router>
  );
}


export default App
