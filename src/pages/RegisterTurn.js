/** @format */

import React, { useState, useEffect } from "react";
import FormOption from "../components/FormOption";
import { getAllDentist, saveDentist } from "../service/DentistService";
import styles from "./styles/home.module.css";
import { useHistory } from "react-router";
import { Button, Stack } from "@material-ui/core";
import { getAllPatient } from "../service/PatientService";

export default function RegisterTurn() {
  const history = useHistory();
  const [listDentists, setListDentists] = useState([]);
  const [listPatients, setlistPatients] = useState([]);
  const [formTurn, setFormTurn] = useState({
    dniPatient: "",
    enrollmentDentist: "",
  });

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

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormTurn({ ...formTurn, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestInit = {
      method: "POST",
      headers: {
        "Content-type": "application/JSON",
      },
      body: JSON.stringify(formTurn),
    };
    saveDentist(requestInit).then((res) => {
      console.log(res);
    });
    setFormTurn({
      dniPatient: "",
      enrollmentDentist: "",
    });
  };
  return (
    <div className={styles.body}>
      <form onSubmit={handleSubmit}>
        <h4>Datos del Turno</h4>
        <FormOption
          type="text"
          label="Dni Paciente"
          name="dni"
          value={formTurn.dni}
          ph="Dni"
          onChange={handleChange}
        />
        <FormOption
          type="number"
          label="Matricula de Odontologo"
          name="enrollment"
          value={formTurn.enrollment}
          ph="Matricula"
          onChange={handleChange}
        />
        <Stack spacing={2} direction="row">
          <Button variant="contained" type="submit">
            Registrarse
          </Button>
        </Stack>
      </form>
    </div>
  );
}
