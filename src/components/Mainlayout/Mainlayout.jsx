import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../pages/Header/Header";

const Mainlayout = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};

export default Mainlayout;