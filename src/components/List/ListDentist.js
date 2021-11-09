/** @format */

import {
  Button,
  CircularProgress,
  IconButton,
  Paper,
  Stack,
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
import { getAllDentist, updateDentist } from "../../service/DentistService";
import FormOption from "../FormOption";

export default function ListDentist() {
  const [loading, setloading] = useState(false);
  const token = JSON.parse(localStorage.getItem("Token"));
  const [listDentists, setlistDentists] = useState([]);
  const [form, setform] = useState(false);
  const [updateForm, setupdateForm] = useState({
    id: 0,
    name: "",
    surname: "",
    enrollment: "",
  });

  useEffect(() => {
    console.log("token: ", token);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    getAllDentist(config)
      .then((res) => {
        console.log("dentistas", res.data);
        setlistDentists(res.data);
        setloading(true);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setupdateForm({ ...updateForm, [name]: value });
  };

  const handleUpdate = (dentist) => {
    setupdateForm({
      id: dentist.id,
      name: dentist.name,
      surname: dentist.surname,
      enrollment: dentist.enrollment,
    });
    setform(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    updateDentist(updateForm, config).then((res) => {
      console.log(res);
    });
    setupdateForm({
      id: 0,
      name: "",
      surname: "",
      enrollment: "",
    });
  };

  return (
    <>
      {!loading ? (
        <CircularProgress color="inherit" className={styles.spinner} />
      ) : !form ? (
        <TableContainer component={Paper} className={styles.listDentist}>
          <Table aria-label="simple table">
            <TableHead className={styles.head}>
              <TableRow>
                <TableCell className={styles.title}>
                  Nombre y Apellido
                </TableCell>
                <TableCell className={styles.title}>Matricula</TableCell>
                <TableCell className={styles.title} align="right">
                  Modificar
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listDentists.map((person) => (
                <TableRow key={person.name}>
                  <TableCell component="th" scope="row">
                    {person.name} {person.surname}
                  </TableCell>
                  <TableCell>{person.enrollment}</TableCell>
                  <TableCell align="right">
                    {" "}
                    <IconButton onClick={() => handleUpdate(person)}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <>
          <form onSubmit={handleSubmit} className={styles.input}>
            <h4>Datos del Odontologo</h4>
            <FormOption
              type="text"
              label="Nombre"
              name="name"
              value={updateForm.name}
              ph="Nombre"
              onChange={handleChange}
            />
            <FormOption
              type="text"
              label="Apellido"
              name="surname"
              value={updateForm.surname}
              ph="Apellido"
              onChange={handleChange}
            />
            <FormOption
              type="text"
              label="Matricula"
              name="enrollment"
              value={updateForm.enrollment}
              ph="Matricula"
              onChange={handleChange}
            />
            <Stack spacing={2} direction="row">
              <Button variant="contained" type="submit">
                Actualizar datos
              </Button>
            </Stack>
          </form>
        </>
      )}
    </>
  );
}
