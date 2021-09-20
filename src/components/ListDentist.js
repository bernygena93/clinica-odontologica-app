/** @format */

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { DeleteIcon } from "@material-ui/icons/Delete";
import React from "react";
import styles from "./styles/list.module.css";

export default function ListDentist({ type, title }) {
  return (
    <>
      <aside className={styles.aside}>
        <h3>{title}</h3>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
