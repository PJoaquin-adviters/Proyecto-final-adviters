import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Layout from "./Pages/Layout/Layout";
import Loading from "./components/Loading/Loading";
import CargarLicenciaPage from "./Pages/CargarLicenciaPage/CargarLicenciaPage";
import User from "./Pages/UserPage/UserPage";
import Weather from "./components/Weather/Weather";
import DashboardPageSupervisor from "./Pages/DashboardPageSupervisor/DashboardPageSupervisor";
import CalendarPage from "./Pages/CalendarPage/CalendarPage";
import AdministrarUsuariosPage from "./Pages/AdministrarUsuariosPage/AdministrarUsuariosPage";
import UserContext from "./components/UserContext/UserContext";
import DashboardPageUsuarios from "./Pages/DashboardPageUsuarios/DashboardPageUsuarios";
import ListaDashboard from "./components/listaDashboard/ListaDashboard";
import ListaLicenciaUsuarios from "./components/ListaLicenciaUsuarios/ListaLicenciaUsuarios";
import ListaDashboardLicenciaUsuarios from "./components/ListaDashboardLicenciaUsuarios";

function App() {
  //id 0 es supervisor, 1 es usuario
  const [idRol, setIdRol] = useState(0);

  return (
    <UserContext.Provider value={{ idRol, setIdRol }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Layout />}>
              {idRol === 1 ? (
                <Route index element={<DashboardPageSupervisor />} />
              ) : (
                <Route index element={<DashboardPageUsuarios />} />
              )}
              <Route path="/user" element={<User />} />
              <Route
                path="/administrarUsuarios"
                element={<AdministrarUsuariosPage />}
              />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/cargarLicencia" element={<CargarLicenciaPage />} />
              <Route path="*" element={<h1>LA PÁGINA NO EXISTE</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
