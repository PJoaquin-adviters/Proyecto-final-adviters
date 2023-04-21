import React, { useState, useContext, useEffect, useLayoutEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useFetcher } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Layout from "./Pages/Layout/Layout";
import Loading from "./components/Loading/Loading";
import CargarLicenciaPage from "./Pages/CargarLicenciaPage/CargarLicenciaPage";
import User from "./Pages/UserPage/UserPage";
import Weather from "./components/Weather/Weather";
import DashboardPageSupervisor from "./Pages/DashboardPageSupervisor/DashboardPageSupervisor";
import DashboardPageUsuarios from "./Pages/DashboardPageUsuarios/DashboardPageUsuarios";
import CalendarPage from "./Pages/CalendarPage/CalendarPage";
import AdministrarUsuariosPage from "./Pages/AdministrarUsuariosPage/AdministrarUsuariosPage";
import UserDataContext from "./context/UserDataContext";
import Protected from "./components/Protected/Protected";

function App() {
  const { dataUser, abrirSesion } = useContext(UserDataContext);
  const [cargado, setCargado] = useState(false)
  
  const checkUserLoggedIn = () => {

    if (!dataUser && localStorage.getItem('Authorization')) {

      const user = {
        name: localStorage.getItem("name"),
        lastname: localStorage.getItem("lastname"),
        idRol: localStorage.getItem("roleId"),
        userPicture: localStorage.getItem("profilePicture"),
        idUser: localStorage.getItem("idUser"),
        supervisorId: localStorage.getItem("supervisorId"),
      };

      abrirSesion(user);

    }

    setCargado(true)

  }

  useEffect(() => {
    checkUserLoggedIn()
  }, [])

  return (
    <>
      {
        !cargado ? <Loading fullHeight={true}/>
        : <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Protected><Layout /></Protected>}>
              {dataUser?.idRol == 0 ? (
                <Route index element={<DashboardPageSupervisor />} />
              ) : (
                <Route index element={<DashboardPageUsuarios />} />
              )}
  
              <Route
                path="/user"
                element={
                  //<Protected>
                  <User />
                  //</Protected>
                }
              />
              <Route
                path="/administrarUsuarios"
                element={
                  <Protected>
                    <AdministrarUsuariosPage />
                  </Protected>
                }
              />
  
              <Route
                path="/calendar"
                element={
                  <Protected>
                    <CalendarPage />
                  </Protected>
                }
              />
              <Route
                path="/cargarLicencia"
                element={
                  <Protected>
                    <CargarLicenciaPage />
                  </Protected>
                }
              />
              <Route path="*" element={<h1>LA PÁGINA NO EXISTE</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      }
    </>
  );
}

export default App;
