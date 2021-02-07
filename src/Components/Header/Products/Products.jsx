import React from "react";
import style from "./Products.module.css";
const Products = () => {
  return (
    <div className={style.Products}>
      <img
        className={style.img}
        src="https://image.flaticon.com/icons/png/24/9/9294.png"
        alt=""
      />
      <h1 className={style.name}>Мужская одежда</h1>
    </div>
  );
};
export default Products;
