import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const [loginPage, setLoginPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleLocationChange = () => {
      const isLoginPage = location.pathname === "/";
      setLoginPage(isLoginPage);
    };
    handleLocationChange();
  }, [location]);
  return (
    <>
      {!loginPage && <Header />}
      {children}
      {!loginPage && <Footer />}
    </>
  );
};

export default Layout;
