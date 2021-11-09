/** @format */

import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/system";
import { Typography } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function AdministrationPanel({ type }) {
  return (
    <Box sx={{ width: "100%" }}>
      <h3 style={{ marginLeft: "2%" }}>Panel de {type.toUpperCase()}</h3>
    </Box>
  );
}
