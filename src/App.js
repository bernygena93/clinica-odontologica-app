/** @format */

import logo from "./logo.svg";
import "./App.css";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import styles from "./pages/styles/app.module.css";
import Footer from "./pages/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import RegisterPatient from "./pages/RegisterPatient";
import RegisterDentist from "./pages/RegisterDentist";
import AdministrationPanel from "./pages/AdministrationPanel";
import RegisterTurn from "./pages/RegisterTurn";

function App() {
  return (
    <div className={styles.body}>
      <BrowserRouter>
        <Menu />
        <Route path="/" component={Home} exact />
        <Route path="/register-patient" component={RegisterPatient} exact />
        <Route path="/register-dentist" component={RegisterDentist} exact />
        <Route path="/register-turn" component={RegisterTurn} exact />
        <Route
          path="/administration-panel"
          component={AdministrationPanel}
          exact
        />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
