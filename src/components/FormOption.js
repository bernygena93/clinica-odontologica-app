/** @format */

import React from "react";
import { TextField, Box } from "@material-ui/core";

export default function FormOption({ type, label, name, value, ph, onChange }) {
  return (
    /*     <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={ph}
        onChange={onChange}
      />
    </div> */
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        name={name}
        type={type}
        label={label}
        variant="standard"
        defaultValue={value}
        onChange={onChange}
      />
    </Box>
  );
}
