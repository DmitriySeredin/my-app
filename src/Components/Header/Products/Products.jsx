import React from "react";
import style from "./Products.module.css";
const Products = () => {
  return (
    <div className={style.Products}>
      <img
        className={style.img}
        src="https://bolf.ua/data/gfx/mask/rus/logo_12_big.svg"
        alt=""
      />
      <div className={style.block}>
        <span className={style.name}>МУЖСКАЯ ОДЕЖДА</span>
      </div>
    </div>
  );
};
export default Products;
