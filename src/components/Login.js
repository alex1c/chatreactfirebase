import React from "react";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";

const Login = () => {
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={"center"}
        justify={"center"}
      >
        <Grid
          style={{ width: 400, background: "lightgray" }}
          container
          alignItems={"center"}
          direction={"coloumn"}
        ><Box p={5}><Button variant={'outlined'}>Войти с помощью Google</Button></Box></Grid>
      </Grid>
    </Container>
  );
};

export default Login;
