import React from "react";
import { NavLink, Route } from "react-router-dom";
import Login from "./Login/Login";
import style from "./LoginPage.module.css";
import Registr from "./Registr/Registr";
const LoginPage = () => {
  return (
    <div className={style.LoginPage}>
      <div className={style.block}>
        <div className={style.logo}>
          <h1>HARAKTER</h1>
        </div>
        <div className={style.form}>
          <div className={style.q}>
            <div>
              <NavLink to="/registr">
                <span>ВПЕРВЫЕ НА HARAKTER?</span>
              </NavLink>
            </div>

            <div>
              <NavLink to="/login">
                <span>ВЫ УЖЕ ЗАРЕГИСТРИРОВАНЫ?</span>
              </NavLink>
            </div>
          </div>
          <Route path="/login" render={() => <Login />} />
          <Route path="/registr" render={() => <Registr />} />
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
