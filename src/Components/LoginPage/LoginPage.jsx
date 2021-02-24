import React from "react";
import style from "./LoginPage.module.css";
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
              <span>ВПЕРВЫЕ НА HARAKTER?</span>
            </div>
            <div>
              <span>ВЫ УЖЕ ЗАРЕГИСТРИРОВАНЫ?</span>
            </div>
          </div>
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
                <img src="" alt="" />
                <span>GOOGLE</span>
              </div>
              <div>
                <img src="" alt="" />
                <span>VK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
