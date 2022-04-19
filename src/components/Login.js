import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import {Context} from '../index'
import firebase from "firebase/compat/app";

const Login = () => {

const {auth} =useContext(Context)


// Signs-in Friendly Chat.
async function signIn() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new GoogleAuthProvider();
  const { user } = await signInWithPopup(getAuth(), provider);
  console.log("user", user);
}

// Signs-out of Friendly Chat.
function signOutUser() {
  //signOut(user,provider);
  //console.log('user2', user)
}

/* const login = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  const {user} = auth.signInWithPopup(provider)
  console.log(user)
} */

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
        ><Box p={5}><Button onClick={signIn} variant={'outlined'}>Войти с помощью Google</Button></Box></Grid>
      </Grid>
    </Container>
  );
};

export default Login;
