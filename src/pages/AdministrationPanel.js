/** @format */

import React, { useState, useEffect } from "react";
import { getAllPatient } from "../service/PatientService";
import { getAllDentist } from "../service/DentistService";
import { getAllTurn } from "../service/TurnService";
import styles from "./styles/home.module.css";

export default function AdministrationPanel() {
  const [listDentists, setListDentists] = useState([]);
  const [listPatients, setlistPatients] = useState([]);
  const [listTurns, setlistTurns] = useState([]);

  useEffect(() => {
    getAllPatient().then((res) => {
      console.log(res);
      setlistPatients(res);
    });
    getAllDentist().then((res) => {
      console.log(res);
      setListDentists(res);
    });
    getAllTurn().then((res) => {
      console.log(res);
      setlistTurns(res);
    });
  }, []);

  return (
    <div className={styles.list}>
      {listDentists.map((dentist, index) => (
        <ul>
          <li>{dentist.name}</li>
          <li>{dentist.surname}</li>
          <li>{dentist.enrollment}</li>
        </ul>
      ))}
    </div>
  );
}
