import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/auth/login/Login";
// import Home from "./pages/Home/Home";
// import Me from "./pages/app/me/Me";
// import DirectMessage from "./components/features/DirectMeesage/DirectMessage";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./pages/firebase/FirebaseConfig";
import Register from "./pages/auth/login/Register";
// import Friends from "./components/features/Friends/Friends";

const App: React.FC = () => {
  initializeApp(firebaseConfig);

  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        {/* <Login /> */}
        <Register />
      </PersistGate>
    </Provider>
  );
};

export default App;
