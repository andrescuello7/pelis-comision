import './App.css';
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import AdminPage from "./pages/Admin/AdminPage";
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import {
  BrowserRouter, Routes, Route
} from "react-router-dom"

function App() {
  return (
    //BrowserRouter = primero
    <BrowserRouter>
      {/* {Routes = Estaran las rutas } */}
      <Routes>
        {/* Route = donde se especifica cada ruta */}
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
