/** @format */

import React, { useState } from "react";
import FormOption from "../components/FormOption";
import { saveDentist } from "../service/DentistService";
import styles from "./styles/home.module.css";
import { useHistory } from "react-router";
import { Button, Stack } from "@material-ui/core";

export default function RegisterDentist() {
  const history = useHistory();
  const [formPerson, setFormPerson] = useState({
    name: "",
    surname: "",
    enrollment: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormPerson({ ...formPerson, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestInit = {
      method: "POST",
      headers: {
        "Content-type": "application/JSON",
      },
      body: JSON.stringify(formPerson),
    };
    saveDentist(requestInit).then((res) => {
      console.log(res);
    });
    setFormPerson({
      name: "",
      surname: "",
      enrollment: "",
    });
    history.push("/");
  };

  return (
    <div className={styles.body}>
      <form onSubmit={handleSubmit}>
        <h4>Datos Personales</h4>
        <FormOption
          type="text"
          label="Nombre"
          name="name"
          value={formPerson.name}
          ph="Nombre"
          onChange={handleChange}
        />
        <FormOption
          type="text"
          label="Apellido"
          name="surname"
          value={formPerson.surname}
          ph="Apellido"
          onChange={handleChange}
        />
        <FormOption
          type="text"
          label="Matricula"
          name="enrollment"
          value={formPerson.enrollment}
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
