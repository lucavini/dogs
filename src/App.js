import React from "react";
import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import ProtectedRouter from "./Components/Helper/ProtectedRouter";
import { UserStorage } from "./UserContext";
import Photo from "./Components/Photo/Photo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRouter path="conta/*" element={<User />} />
            <Route path="foto/:id" element={<Photo />} />
          </Routes>

          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
