/** @format */

import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import { DeleteIcon } from "@material-ui/icons/Delete";
import React from "react";
import styles from "./styles/list.module.css";
import { useHistory } from "react-router";

export default function ListTurn({ type, title }) {
  const history = useHistory();
  const handleClick = () => {
    history.push("/register-turn");
  };

  return (
    <>
      <aside className={styles.asideTurn}>
        <h3>{title}</h3>
        <IconButton onClick={handleClick} aria-label="delete" color="primary">
          <AddCircleOutline />
        </IconButton>
      </aside>
      <TableContainer component={Paper} className={styles.listDentist}>
        <Table aria-label="simple table">
          <TableHead className={styles.head}>
            <TableRow>
              <TableCell className={styles.title}>Nombre y Apellido</TableCell>
              <TableCell className={styles.title} align="right">
                Matricula
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {type.map((person) => (
              <TableRow key={person.name}>
                <TableCell component="th" scope="row">
                  {person.name} {person.surname}
                </TableCell>
                <TableCell align="right">{person.enrollment}</TableCell>
                <IconButton aria-label="delete" disabled color="danger">
                  <DeleteIcon />
                </IconButton>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
