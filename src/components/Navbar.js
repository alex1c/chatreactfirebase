import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid"
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";

const Navbar = () => {
  const user = false;
  return (
    <AppBar position="static" color={"secondary"}>
      <Toolbar variant={'dense'}>
        <Grid container justify={"flex-end"}>
          {user ? (
            <Button variant={"contained"}>Выйти</Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}><Button variant={"contained"}>Логин</Button></NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
