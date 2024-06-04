import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarContainer } from "./ui/navbar-container";

export const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <span>TypeHere</span>
      </NavbarContainer>
      <Outlet />
    </>
  );
};
