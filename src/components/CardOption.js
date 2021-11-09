/** @format */

import React from "react";
import { useHistory } from "react-router";
import styles from "./styles/card.module.css";

export default function CardOption({ type, link }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(link);
  };

  return (
    <button className={styles.card} onClick={handleClick}>
      <h3 style={{ color: "#212f3c" }}>{type}</h3>
    </button>
  );
}
