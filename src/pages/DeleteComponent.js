/** @format */

import React, { useState, useEffect } from "react";
import DeleteDentist from "../components/DeleteDentist";
import DeletePatient from "../components/DeletePatient";
import DeleteTurn from "../components/DeleteTurn";

export default function DeleteComponent({ type }) {
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
    <div>
      <>
        {turnos && !odontologos && !pacientes && <DeleteTurn />}
        {!turnos && !odontologos && pacientes && <DeletePatient />}
        {!turnos && odontologos && !pacientes && <DeleteDentist />}
      </>
    </div>
  );
}
