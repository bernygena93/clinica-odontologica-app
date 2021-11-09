/** @format */

import {
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import React, { useEffect, useState } from "react";
import styles from "../styles/list.module.css";
import { getAllTurn } from "../../service/TurnService";

export default function ListTurn() {
  const [loading, setloading] = useState(false);
  const token = JSON.parse(localStorage.getItem("Token"));
  const [listTurns, setlistTurns] = useState([]);

  useEffect(() => {
    console.log("token: ", token);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    getAllTurn(config)
      .then((res) => {
        console.log("turnos", res.data);
        setlistTurns(res.data);
        setloading(true);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      {!loading ? (
        <CircularProgress color="inherit" className={styles.spinner} />
      ) : (
        <TableContainer component={Paper} className={styles.listDentist}>
          <Table aria-label="simple table">
            <TableHead className={styles.head}>
              <TableRow>
                <TableCell className={styles.title}>Paciente</TableCell>
                <TableCell className={styles.title}>Matricula</TableCell>
                <TableCell className={styles.title}>Fecha</TableCell>
                <TableCell className={styles.title}>Horario</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listTurns.map((person) => (
                <TableRow key={person.dniPatient}>
                  <TableCell component="th" scope="row">
                    {person.dniPatient}
                  </TableCell>
                  <TableCell>{person.enrollmentDentist}</TableCell>
                  <TableCell>{person.dateTurn}</TableCell>
                  <TableCell>{person.timeTurn}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
