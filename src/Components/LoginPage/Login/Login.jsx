import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Login.module.css";
const Login = () => {
  return (
    <div className={style.block}>
      <div className={style.form}>
        <div className={style.form2}>
          <form action="">
            <h3>ВОЙТИ ЧЕРЕЗ ЭЛЕКТРОННУЮ ПОЧТУ</h3>
            <label htmlFor="">
              АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ: <br />
              <input type="text" />
            </label>
            <label htmlFor="">
              ПАРОЛЬ: <br />
              <input type="text" />
            </label>
            <button>ВОЙТИ</button>
            <a href="">Забыли пароль?</a>
          </form>
        </div>
        <div className={style.entry}>
          <h3>ИЛИ</h3>
          <h3>ВОЙТИ ЧЕРЕЗ...</h3>
          <div className={style.btn}>
            <div>
              <img
                src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png"
                alt=""
              />
              <span>GOOGLE</span>
            </div>
            <div>
              <img
                src="https://image.flaticon.com/icons/png/512/36/36917.png"
                alt=""
              />
              <span>ВКонтакте</span>
            </div>
          </div>
          <NavLink to="/app">
            <button className={style.button}>Назад</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Login;
