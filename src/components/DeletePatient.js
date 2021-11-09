/** @format */

import {
  Table,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@material-ui/core";
import BackspaceIcon from "@material-ui/icons/Backspace";
import React, { useEffect, useState } from "react";
import { deletePatientById, getAllPatient } from "../service/PatientService";
import styles from "./styles/list.module.css";

export default function DeletePatient() {
  const token = JSON.parse(localStorage.getItem("Token"));
  const [listPatient, setlistPatients] = useState([]);

  /*   useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    getAllPatient(config)
      .then((res) => {
        console.log("dentistas", res.data);
        setlistPatients(res.data);
      })
      .catch((e) => console.log(e));
  }, []); */

  useEffect(async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await getAllPatient(config);
      console.log("dentistas", res.data);
      setlistPatients(res.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleClick = (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    deletePatientById(id, config)
      .then((res) => {
        console.log(res);
        alert("El paciente fue eliminado");
      })
      .catch((e) => alert("No tiene los permisos para ealizar esa operacion"));
  };

  return (
    <div>
      <TableContainer component={Paper} className={styles.listDentist}>
        <Table aria-label="simple table">
          <TableHead className={styles.head}>
            <TableRow>
              <TableCell className={styles.title}>Id</TableCell>
              <TableCell className={styles.title}>DNI</TableCell>
              <TableCell className={styles.title} align="right">
                Eliminar
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listPatient.map((person) => (
              <TableRow key={person.id}>
                <TableCell component="th" scope="row">
                  {person.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {person.dni}
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  <IconButton onClick={() => handleClick(person.id)}>
                    <BackspaceIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
