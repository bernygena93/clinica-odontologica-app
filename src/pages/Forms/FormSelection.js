/** @format */

import React, { useEffect, useState } from "react";
import RegisterDentist from "./RegisterDentist";
import RegisterPatient from "./RegisterPatient";
import RegisterTurn from "./RegisterTurn";

export default function FormSelection({ type }) {
  const [turnos, setturnos] = useState(false);
  const [pacientes, setpacientes] = useState(false);
  const [odontologos, setodontologos] = useState(false);

  useEffect(() => {
    if (type === "pacientes") {
      setturnos(false);
      setpacientes(true);
      setodontologos(false);
    }
    if (type === "turnos") {
      setturnos(true);
      setpacientes(false);
      setodontologos(false);
    }
    if (type === "odontologos") {
      setturnos(false);
      setpacientes(false);
      setodontologos(true);
    }
  });

  return (
    <>
      {turnos && !odontologos && !pacientes && <RegisterTurn />}
      {!turnos && !odontologos && pacientes && <RegisterPatient />}
      {!turnos && odontologos && !pacientes && <RegisterDentist />}
    </>
  );
}
