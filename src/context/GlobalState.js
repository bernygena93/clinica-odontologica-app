/** @format */

import { useState } from "react";
import ClinicalContext from "./ClinicalContext";

function GlobalState(props) {
  const [user, setUser] = useState(localStorage.getItem("Login"));
  const [userInfo, setUserInfo] = useState({
    userName: JSON.parse(localStorage.getItem("Usuario")),
  });
  const [role, setrole] = useState({
    role: JSON.parse(localStorage.getItem("Rol")),
  });

  const loginUser = (info) => {
    setUser(true);
    localStorage.setItem("Login", true);
    setUserInfo(info);
    setrole({ role: info.authority[0].authority });
    localStorage.setItem("Usuario", JSON.stringify(info.userName));
    localStorage.setItem("Token", JSON.stringify(info.token));
    localStorage.setItem("Rol", JSON.stringify(info.authority[0].authority));
  };

  const logoutUser = () => {
    setUser(false);
    localStorage.removeItem("Login");
    setUserInfo({});
    localStorage.removeItem("Usuario");
    localStorage.removeItem("Token");
    localStorage.removeItem("Rol");
  };

  const infoLogin = () => {
    return userInfo;
  };
  return (
    <ClinicalContext.Provider
      value={{
        user: user,
        userInfo: userInfo,
        role: role,
        loginUser: loginUser,
        logoutUser: logoutUser,
        infoLogin: infoLogin,
      }}
    >
      {props.children}
    </ClinicalContext.Provider>
  );
}

export default GlobalState;
