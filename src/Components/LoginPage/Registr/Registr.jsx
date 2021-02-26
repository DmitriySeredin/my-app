import React from "react";
import { Button } from "../Login/Login";
import style from "./Registr.module.css";
const Registr = () => {
  return (
    <div className={style.registr}>
      <h3>ЗАРЕГИСТРИРОВАТЬСЯ ЧЕРЕЗ</h3>
      <Button />
      <div className={style.form}>
        <h3>ИЛИ</h3>
      </div>
    </div>
  );
};
export default Registr;
