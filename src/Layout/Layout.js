import React from "react";
import MainNav from "./MainNav/MainNav";
import AppRoutes from "../components/Routes/AppRoutes";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      <main>
        <AppRoutes />
      </main>
    </>
  );
};

export default Layout;
