/** @format */

import React, { useState, useEffect } from "react";
import { getAllPatient } from "../service/PatientService";
import { getAllDentist } from "../service/DentistService";
import { getAllTurn } from "../service/TurnService";
import styles from "./styles/home.module.css";
import ListDentist from "../components/ListDentist";
import ListPatient from "../components/ListPatient";
import ListTurn from "../components/ListTurn";

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
  }, []);

  return (
    <div className={styles.body}>
      <ListDentist type={listDentists} title="Odontologos" />
      <ListPatient type={listPatients} title="Pacientes" />
      <ListTurn type={listTurns} title="Turnos" />
    </div>
  );
}
