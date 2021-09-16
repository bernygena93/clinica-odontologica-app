/** @format */

import React, { useState } from "react";
import FormOption from "../components/FormOption";
import { savePatient } from "../service/PatientService";
import { saveAddress } from "../service/AddressService";
import styles from "./styles/home.module.css";
import { useHistory } from "react-router";
import { Button, Stack } from "@material-ui/core";

export default function RegisterPatient() {
  const history = useHistory();
  const [formPerson, setFormPerson] = useState({
    name: "",
    surname: "",
    dni: "",
  });
  const [formAddress, setFormAddress] = useState({
    street: "",
    number: 0,
    location: "",
    procinve: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormPerson({ ...formPerson, [name]: value });
  };

  const handleChangeAddress = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormAddress({ ...formAddress, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestInitPerson = {
      method: "POST",
      headers: {
        "Content-type": "application/JSON",
      },
      body: JSON.stringify(formPerson),
    };
    const requestInitAddress = {
      method: "POST",
      headers: {
        "Content-type": "application/JSON",
      },
      body: JSON.stringify(formAddress),
    };
    savePatient(requestInitPerson).then((res) => {
      console.log(res);
    });
    saveAddress(requestInitAddress).then((res) => {
      console.log(res);
    });
    setFormPerson({
      name: "",
      surname: "",
      dni: "",
    });
    setFormAddress({
      street: "",
      number: 0,
      location: "",
      procinve: "",
    });
    history.push("/");
  };

  return (
    <div className={styles.body}>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <div>
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
              label="DNI"
              name="dni"
              value={formPerson.dni}
              ph="DNI"
              onChange={handleChange}
            />
          </div>
          <div>
            <h4>Domicilio</h4>
            <FormOption
              type="text"
              label="Calle"
              name="street"
              value={formAddress.street}
              ph="Calle"
              onChange={handleChangeAddress}
            />
            <FormOption
              type="number"
              label="Numero"
              name="number"
              value={formAddress.number}
              ph="Numero"
              onChange={handleChangeAddress}
            />
            <FormOption
              type="text"
              label="Localidad"
              name="location"
              value={formAddress.location}
              ph="Localidad"
              onChange={handleChangeAddress}
            />
            <FormOption
              type="text"
              label="Provincia"
              name="province"
              value={formAddress.province}
              ph="Provincia"
              onChange={handleChangeAddress}
            />
          </div>
        </div>
        <Stack spacing={2} direction="row">
          <Button variant="contained" className={styles.button} type="submit">
            Registrarse
          </Button>
        </Stack>
      </form>
    </div>
  );
}
