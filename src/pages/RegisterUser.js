/** @format */

import React, { useState } from "react";
import { signUp } from "../service/UserService";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import FormOption from "../components/FormOption";
import styles from "./styles/home.module.css";
import { Button, Stack } from "@material-ui/core";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function RegisterUser() {
  const history = useHistory();
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestInit = user;
    console.log(user);
    signUp(requestInit)
      .then((data) => {
        console.log(data);
        alert("usuario creado con exito");
        alert(`Ingrese con sus nuevas credenciales`);
        history.push("/");
      })
      .catch((e) => alert(e));
  };

  return (
    <div className={styles.homeRegister}>
      <form onSubmit={handleSubmit} className={styles.container}>
        <div className={styles.form}>
          <div className={styles.input}>
            <h2 style={{ color: "black" }}>
              Clinica<span style={{ color: "#2C9AE7" }}>Odontologica</span>
            </h2>
            <h3 style={{ color: "#1f3369" }}>SignUp</h3>
            <FormOption
              type="text"
              label="Usuario"
              name="userName"
              value={user.userName}
              ph="Nombre de Usuario"
              onChange={handleChange}
            />
            <FormOption
              type="email"
              label="Email"
              name="email"
              value={user.email}
              ph="Email"
              onChange={handleChange}
            />
            <FormOption
              type="password"
              label="Password"
              name="password"
              value={user.password}
              ph="Password"
              onChange={handleChange}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Perfil</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="role"
                value={user.role}
                label="Perfil"
                onChange={handleChange}
              >
                <MenuItem value={"ADMIN"}>ADMINISTRADOR</MenuItem>
                <MenuItem value={"USUARIO"}>USUARIO</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <Stack spacing={2} direction="row">
          <Button variant="contained" className={styles.button} type="submit">
            Registrarse
          </Button>
        </Stack>
        <small style={{ color: "black" }}>
          Si ya tienes cuenta ingresa
          <Link to="/"> aqui</Link>
        </small>
      </form>
    </div>
  );
}
