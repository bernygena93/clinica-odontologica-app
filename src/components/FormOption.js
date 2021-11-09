/** @format */

import React from "react";
import { TextField, Box } from "@material-ui/core";

export default function FormOption({ type, label, name, value, onChange }) {
  return (
    <TextField
      name={name}
      type={type}
      label={label}
      defaultValue={value}
      onChange={onChange}
      autoComplete="current-password"
    />
  );
}
