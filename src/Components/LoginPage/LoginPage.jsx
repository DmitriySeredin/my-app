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
              <NavLink to="/login/registr">
                <span>ВПЕРВЫЕ НА HARAKTER?</span>
              </NavLink>
            </div>
            <div>
              <NavLink to="/login/login1">
                <span>ВЫ УЖЕ ЗАРЕГИСТРИРОВАНЫ?</span>
              </NavLink>
            </div>
          </div>
        </div>
        <Route path="/login/login1" render={() => <Login />} />
        <Route path="/login/registr" render={() => <Registr />} />
      </div>
    </div>
  );
};
export default LoginPage;
