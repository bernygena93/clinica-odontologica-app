/** @format */

import React, { useState } from "react";
import CardOption from "../components/CardOption";
import styles from "./styles/home.module.css";
import logo from "../assets/caduceus-30591_960_720.png";

export default function Home() {
  const [options, setOptions] = useState([
    "Administracion",
    "Odontologo",
    "Paciente",
  ]);
  return (
    <div className={styles.bodyHome}>
      <img src={logo} />
      <h1 className={styles.title}>Bienvenido!</h1>
      <h2 className={styles.title}>Desea Registrar un..</h2>
      <div className={styles.container}>
        <CardOption type={options[0]} link="/administration-panel" />
        <CardOption type={options[1]} link="register-dentist" />
        <CardOption type={options[2]} link="register-patient" />
      </div>
    </div>
  );
}
