import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div
        style={{
          marginTop: "64px",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
