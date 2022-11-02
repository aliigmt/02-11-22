import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Home from '../Home';
import NavBar from '../NavBar/NavBar';
export default function Web() {
  return (
    <div>
    <NavBar/>
      <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Register />} />
     </Routes>
    </div>
  )
}

