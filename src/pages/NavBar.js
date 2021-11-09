/** @format */

import { Divider, List, ListItem, ListItemText } from "@material-ui/core";
import React, { useContext } from "react";
import styles from "./styles/menu.module.css";
import ClinicalContext from "../context/ClinicalContext";
import { useHistory } from "react-router";
export default function NavBar({ onClickType }) {
  const context = useContext(ClinicalContext);
  const history = useHistory();

  const handleClick = () => {
    context.logoutUser();
    history.push("/");
  };
  return (
    <>
      <ClinicalContext.Consumer>
        {(context) => (
          <div className={styles.navBar}>
            <div style={{ marginLeft: "5%" }}>
              <h3>Bienvenido {context.userInfo?.userName}</h3>
              <h5>
                Rol:{" "}
                {context.role?.role === "ROLE_ADMIN"
                  ? "Administrador"
                  : "Usuario"}
              </h5>
            </div>
            <List component="nav" aria-label="mailbox folders">
              <ListItem button>
                <ListItemText
                  primary="Turnos"
                  onClick={() => onClickType("turnos")}
                />
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText
                  primary="Pacientes"
                  onClick={() => onClickType("pacientes")}
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary="Odontologos"
                  onClick={() => onClickType("odontologos")}
                />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="Salir" onClick={handleClick} />
              </ListItem>
            </List>
          </div>
        )}
      </ClinicalContext.Consumer>
    </>
  );
}
