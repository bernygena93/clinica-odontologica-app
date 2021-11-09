/** @format */

import React, { useEffect, useState } from "react";
import FormOption from "../../components/FormOption";
import styles from "../styles/home.module.css";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  Stack,
} from "@material-ui/core";
import { saveTurn } from "../../service/TurnService";
import { getDni } from "../../service/PatientService";
import { InputLabel } from "@mui/material";
import { getEnrollment } from "../../service/DentistService";

export default function RegisterTurn() {
  const token = JSON.parse(localStorage.getItem("Token"));
  const [listdni, setlistdni] = useState([]);
  const [listenrollment, setlistenrollment] = useState([]);
  const [formTurn, setFormTurn] = useState({
    dniPatient: "",
    enrollmentDentist: "",
    dateTurn: "",
    timeTurn: "",
  });

  useEffect(() => {
    console.log("token: ", token);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    getDni(config)
      .then((res) => {
        console.log("dentistas", res.data);
        setlistdni(res.data);
      })
      .catch((e) => console.log(e));
    getEnrollment(config)
      .then((res) => {
        console.log("dentistas", res.data);
        setlistenrollment(res.data);
      })
      .catch((e) => console.log(e));
    console.log(listdni);
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormTurn({ ...formTurn, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    saveTurn(formTurn, config)
      .then((res) => {
        console.log(res);
        alert("el turno fue ingresado con exito");
      })
      .catch((e) => alert(e));
    setFormTurn({
      dniPatient: "",
      enrollmentDentist: "",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.input}>
          <h4>Datos del Turno</h4>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">DNI</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="dniPatient"
              value={formTurn.dniPatient}
              label="Dni Paciente"
              onChange={handleChange}
            >
              {listdni.map((dni) => (
                <MenuItem value={dni.dni}>{dni.dni}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Matricula</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="enrollmentDentist"
              value={formTurn.enrollmentDentist}
              label="Matricula del Odontologo"
              onChange={handleChange}
            >
              {listenrollment.map((enrollment) => (
                <MenuItem value={enrollment.enrollment}>
                  {enrollment.enrollment}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormOption
            type="text"
            label="YYYY-MM-DD"
            name="dateTurn"
            value={formTurn.dateTurn}
            ph="Fecha"
            onChange={handleChange}
          />
          <FormOption
            type="text"
            label="HH-MM-SS"
            name="timeTurn"
            value={formTurn.timeTurn}
            ph="Hora"
            onChange={handleChange}
          />
          <Stack spacing={2} direction="row">
            <Button variant="contained" type="submit">
              Registrarse
            </Button>
          </Stack>
        </div>
      </form>
    </>
  );
}
