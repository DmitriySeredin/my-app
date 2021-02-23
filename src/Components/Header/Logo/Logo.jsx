import React from "react";
import style from "./Logo.module.css";
const Logo = () => {
  return (
    <div className={style.Products}>
      {/* <img
        className={style.img}
        src="https://bolf.ua/data/gfx/mask/rus/logo_12_big.svg"
        alt=""
      /> */}
      <span className={style.span}>HARAKTER</span>
      <div className={style.block}>
        <span className={style.name}>МУЖСКАЯ ОДЕЖДА</span>
      </div>
    </div>
  );
};
export default Logo;
