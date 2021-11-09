/** @format */

import React, { useState } from "react";
import FormOption from "../../components/FormOption";
import { savePatient } from "../../service/PatientService";
import { saveAddress } from "../../service/AddressService";
import styles from "../styles/home.module.css";
import { useHistory } from "react-router";
import { Button, Stack } from "@material-ui/core";

export default function RegisterPatient() {
  const token = JSON.parse(localStorage.getItem("Token"));
  const history = useHistory();
  const [formPerson, setFormPerson] = useState({
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

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormPerson({ ...formPerson, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    savePatient(formPerson, config)
      .then((res) => {
        console.log(res);
        alert("el paciente fue ingresado con exito");
      })
      .catch((e) => alert("No tiene los permisos para esta operacion"));
    setFormPerson({
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
    history.push("/home");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <div className={styles.input}>
            <h4>Datos del Paciente</h4>
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
              label="DNI"
              name="dni"
              value={formPerson.dni}
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
              value={formPerson.address.street}
              ph="Calle"
              onChange={handleChange}
            />
            <FormOption
              type="number"
              label="Numero"
              name="number"
              value={formPerson.address.number}
              ph="Numero"
              onChange={handleChange}
            />
            <FormOption
              type="text"
              label="Localidad"
              name="location"
              value={formPerson.address.location}
              ph="Localidad"
              onChange={handleChange}
            />
            <FormOption
              type="text"
              label="Provincia"
              name="province"
              value={formPerson.address.province}
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
            Registrar
          </Button>
        </Stack>
      </form>
    </>
  );
}
