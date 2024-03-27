import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import Login from "./pages/auth/login/Login";
import Me from "./pages/app/me/Me";
import Register from "./pages/auth/login/Register";
import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/channels/@me" element={<Me />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
