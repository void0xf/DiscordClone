import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/Home/Home';
import Login from './pages/auth/login/Login';
import React from 'react';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}


export default App
