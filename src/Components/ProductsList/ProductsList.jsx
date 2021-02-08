import React from "react";
import style from "./ProductsList.module.css";
const ProductsList = () => {
  return (
    <div className={style.menu}>
      <div className={style.menuItem}>Новинки</div>
      <div className={style.menuItem}>Одежда</div>
      <div className={style.menuItem}>Обувь</div>
      <div className={style.menuItem}>Аксессуары</div>
      <div className={style.menuItem}>Спортивная одежда</div>
      <div className={style.menuItem}>Лицо и Тело</div>
      <div className={style.menuItem}>Бренды</div>
      <div className={style.menuItem}>Аутлет</div>
      <div className={style.menuItem}>Распродажа</div>
      <div className={style.menuItem}>Marketplace</div>
    </div>
  );
};
export default ProductsList;
