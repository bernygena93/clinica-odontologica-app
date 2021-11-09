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
import { deleteTurnById, getAllTurn } from "../service/TurnService";
import styles from "./styles/list.module.css";

export default function DeleteTurn() {
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
      })
      .catch((e) => console.log(e));
  }, []);

  const handleClick = (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    deleteTurnById(id, config).then((res) => console.log(res));
  };

  return (
    <div>
      <TableContainer component={Paper} className={styles.listDentist}>
        <Table aria-label="simple table">
          <TableHead className={styles.head}>
            <TableRow>
              <TableCell className={styles.title}>Id</TableCell>
              <TableCell className={styles.title}>Matricula-Dni</TableCell>
              <TableCell className={styles.title} align="right">
                Eliminar
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listTurns.map((person) => (
              <TableRow key={person.id}>
                <TableCell component="th" scope="row">
                  {person.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {person.enrollmentDentist}-{person.dniPatient}
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
