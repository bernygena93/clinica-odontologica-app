/** @format */

import React, { useState, useContext } from "react";
import { signIn } from "../service/UserService";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import FormOption from "../components/FormOption";
import styles from "./styles/home.module.css";
import { Button, Stack } from "@material-ui/core";
import ClinicalContext from "../context/ClinicalContext";

export default function LoginUser() {
  const context = useContext(ClinicalContext);
  const history = useHistory();
  const [userLogin, setUserLogin] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserLogin({ ...userLogin, [name]: value });
  };

  /* const handleSubmit = (event) => {
    event.preventDefault();
    const requestInit = userLogin;
    signIn(requestInit)
      .then((data) => {
        console.log(data);
        context.loginUser(data.data);
      })
      .catch((e) => console.log("error", e));
    history.push("/home");
  }; */

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestInit = userLogin;
    const data = await signIn(requestInit);
    console.log(data);
    context.loginUser(data.data);
    history.push("/home");
  };

  return (
    <div className={styles.homeRegister}>
      <form onSubmit={handleSubmit} className={styles.container}>
        <div className={styles.form}>
          <div className={styles.input}>
            <h2 style={{ color: "black" }}>
              Clinica<span style={{ color: "#2C9AE7" }}>Odontologica</span>
            </h2>
            <h3 style={{ color: "#1f3369" }}>Login</h3>
            <FormOption
              type="text"
              label="Nombre de Usuario"
              name="userName"
              value={userLogin.userName}
              ph="Nombre de Usuario"
              onChange={handleChange}
            />
            <FormOption
              type="password"
              label="Password"
              name="password"
              value={userLogin.password}
              ph="Password"
              onChange={handleChange}
            />
          </div>
        </div>
        <Stack spacing={2} direction="row">
          <Button variant="contained" className={styles.button} type="submit">
            Ingresar
          </Button>
        </Stack>
        <small style={{ color: "black" }}>
          Si no estas registrado ingresa
          <Link to="/signup"> aqui</Link>
        </small>
      </form>
    </div>
  );
}
