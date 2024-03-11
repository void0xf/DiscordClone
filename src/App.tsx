import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import React from 'react';
import Home from './pages/Home/Home';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/login/Register';

const App: React.FC = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}


export default App
