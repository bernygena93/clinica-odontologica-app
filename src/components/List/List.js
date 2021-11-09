/** @format */

import React, { useState, useEffect } from "react";
import ListTurn from "../List/ListTurn";
import ListPatient from "../List/ListPatient";
import ListDentist from "../List/ListDentist";

export default function List({ type, data }) {
  const [turnos, setturnos] = useState(false);
  const [pacientes, setpacientes] = useState(false);
  const [odontologos, setodontologos] = useState(false);

  useEffect(() => {
    if (type == "pacientes") {
      setturnos(false);
      setpacientes(true);
      setodontologos(false);
    }
    if (type == "turnos") {
      setturnos(true);
      setpacientes(false);
      setodontologos(false);
    }
    if (type == "odontologos") {
      setturnos(false);
      setpacientes(false);
      setodontologos(true);
    }
  });

  return (
    <>
      {turnos && !odontologos && !pacientes && <ListTurn />}
      {!turnos && !odontologos && pacientes && <ListPatient />}
      {!turnos && odontologos && !pacientes && <ListDentist />}
    </>
  );
}
