import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import NavBar from '../NavBar/NavBar';
import Home from '../Pages/Home/Home';
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

