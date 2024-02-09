import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NavbarRoute from "./NavbarRoute";
import Register from "./Pages/Register";
import React from 'react'
import Login from "./Pages/Login";
const Router = () => {

  return (
   <>
   <BrowserRouter>
   <NavbarRoute/>
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default Router


