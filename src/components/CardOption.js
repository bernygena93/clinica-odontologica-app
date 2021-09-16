/** @format */

import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/card.module.css";

export default function CardOption({ type, link }) {
  return (
    <Link to={link}>
      <button className={styles.card}>
        <h3 style={{ color: "white" }}>{type}</h3>
      </button>
    </Link>
  );
}
