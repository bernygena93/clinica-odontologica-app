/** @format */

import React from "react";
import AdministrationPanel from "./AdministrationPanel";
import styles from "./styles/menu.module.css";

export default function Header({ type }) {
  return (
    <>
      <div className={styles.menu}>
        <AdministrationPanel type={type} />
        <h1 style={{ color: "white" }}>
          Clinica<span style={{ color: "#2C9AE7" }}>Odontologica</span>
        </h1>
      </div>
    </>
  );
}
