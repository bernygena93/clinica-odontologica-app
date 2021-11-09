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
import { DeleteIcon } from "@material-ui/icons/Delete";
import React, { useEffect, useState } from "react";
import styles from "../styles/list.module.css";
import { getAllPatient, updatePatient } from "../../service/PatientService";
import FormOption from "../FormOption";

export default function ListPatient() {
  const [loading, setloading] = useState(false);
  const token = JSON.parse(localStorage.getItem("Token"));
  const [listPatients, setlistPatients] = useState([]);
  const [form, setform] = useState(false);
  const [updateForm, setupdateForm] = useState({
    id: 0,
    name: "",
    surname: "",
    dni: "",
    address: {
      street: "",
      number: 0,
      location: "",
      province: "",
    },
    dateAdmission: "",
  });

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    getAllPatient(config)
      .then((res) => {
        console.log("pacientes", res.data);
        setlistPatients(res.data);
        setloading(true);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setupdateForm({ ...updateForm, [name]: value });
  };

  const handleUpdate = (patient) => {
    setupdateForm({
      id: patient.id,
      name: patient.name,
      surname: patient.surname,
      dni: patient.dni,
      address: {
        id: patient.address.id,
        street: patient.address.street,
        number: patient.address.number,
        location: patient.address.location,
        province: patient.address.province,
      },
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
    updatePatient(updateForm, config).then((res) => {
      console.log(res);
    });
    setupdateForm({
      id: 0,
      name: "",
      surname: "",
      dni: "",
      address: {
        street: "",
        number: 0,
        location: "",
        province: "",
      },
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
                <TableCell className={styles.title}>DNI</TableCell>
                <TableCell className={styles.title}>Fecha de Ingreso</TableCell>
                <TableCell className={styles.title} align="right">
                  Modificar
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listPatients.map((person) => (
                <TableRow key={person.name}>
                  <TableCell component="th" scope="row">
                    {person.name} {person.surname}
                  </TableCell>
                  <TableCell>{person.dni}</TableCell>
                  <TableCell>{person.dateAdmission}</TableCell>
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
          <form onSubmit={handleSubmit}>
            <div className={styles.form}>
              <div className={styles.input}>
                <h4>Datos del Paciente</h4>
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
                  label="DNI"
                  name="dni"
                  value={updateForm.dni}
                  ph="DNI"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.input}>
                <h4>Domicilio</h4>
                <FormOption
                  type="text"
                  label="Calle"
                  name="street"
                  value={updateForm.address.street}
                  ph="Calle"
                  onChange={handleChange}
                />
                <FormOption
                  type="number"
                  label="Numero"
                  name="number"
                  value={updateForm.address.number}
                  ph="Numero"
                  onChange={handleChange}
                />
                <FormOption
                  type="text"
                  label="Localidad"
                  name="location"
                  value={updateForm.address.location}
                  ph="Localidad"
                  onChange={handleChange}
                />
                <FormOption
                  type="text"
                  label="Provincia"
                  name="province"
                  value={updateForm.address.province}
                  ph="Provincia"
                  onChange={handleChange}
                />
              </div>
            </div>
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                className={styles.buttonPatient}
                type="submit"
              >
                Actualizar datos
              </Button>
            </Stack>
          </form>
        </>
      )}
    </>
  );
}
