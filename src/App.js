/** @format */

import Home from "./pages/Home";
import styles from "./pages/styles/app.module.css";
import { BrowserRouter, Route } from "react-router-dom";
import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";
import GlobalState from "./context/GlobalState";

function App() {
  return (
    <GlobalState>
      <div className={styles.body}>
        <BrowserRouter>
          <Route path="/" component={LoginUser} exact />
          <Route path="/signup" component={RegisterUser} exact />
          <Route path="/home" component={Home} exact />
        </BrowserRouter>
      </div>
    </GlobalState>
  );
}

export default App;
