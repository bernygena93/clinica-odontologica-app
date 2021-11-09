/** @format */
import React, { useState } from "react";
import styles from "./styles/home.module.css";
import NavBar from "./NavBar";
import Header from "./Header";
import BasicTabs from "../components/Panel";

export default function Home() {
  const [type, settype] = useState("");

  const handleType = (option) => {
    settype(option);
  };

  return (
    <div className={styles.panel}>
      <NavBar onClickType={handleType} />
      <div className={styles.content}>
        <Header type={type} />
        <BasicTabs type={type} />
      </div>
    </div>
  );
}
