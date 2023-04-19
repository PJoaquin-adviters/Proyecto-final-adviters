import React, { useState, useContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Layout from "./Pages/Layout/Layout";
import Loading from "./components/Loading/Loading";
import CargarLicenciaPage from "./Pages/CargarLicenciaPage/CargarLicenciaPage";
import User from "./Pages/UserPage/UserPage";
import Weather from "./components/Weather/Weather";
import DashboardPageSupervisor from "./Pages/DashboardPageSupervisor/DashboardPageSupervisor";
import DashboardPageUsuarios from "./Pages/DashboardPageUsuarios/DashboardPageUsuarios"
import CalendarPage from "./Pages/CalendarPage/CalendarPage";
import AdministrarUsuariosPage from "./Pages/AdministrarUsuariosPage/AdministrarUsuariosPage";
import UserDataContext from "./context/UserDataContext";

function App() {
  const { dataUser } = useContext(UserDataContext);
  console.log(dataUser);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Layout />}>
            {dataUser.idRol === 0 ? (
              <Route index element={<DashboardPageSupervisor/>} />
            ) : (
              <Route index element={ <DashboardPageUsuarios/>} />
            )}

            <Route path="/user" element={<User />} />
            <Route path="/administrarUsuarios" element={<AdministrarUsuariosPage />}/>
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/cargarLicencia" element={<CargarLicenciaPage />} />
            <Route path="*" element={<h1>LA PÁGINA NO EXISTE</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
