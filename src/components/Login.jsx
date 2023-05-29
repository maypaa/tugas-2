//eslint-disable-next-line no-unused-vars
import React from "react";
import Tombol from "./Tombol";
import KotakTeks from "./KotakTeks";

function Login() {
  return (
    <>
      <KotakTeks teks="Email      " /><br></br>
      <KotakTeks teks="Password   " /><br></br><br></br>
      <Tombol teks="Login" />
    </>
  );
}

export default Login;