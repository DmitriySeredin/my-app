import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={style.profile}>
      <div className={style.entry}>
        <NavLink to="/login">
          <span>Войти</span>
        </NavLink>
        <span>Регистрация</span>
      </div>
      <div className={style.options}>
        <ul>
          <li>
            <img
              src="https://pics.freeicons.io/uploads/icons/png/19339625881548233621-512.png"
              alt=""
            />
            <p>Личный кабинет</p>
          </li>
          <li>
            <img
              src="https://img.icons8.com/ios/452/shopping-cart.png"
              alt=""
            />
            <p>Мои заказы</p>
          </li>
          <li>
            <img src="https://img.icons8.com/pastel-glyph/2x/info.png" alt="" />
            <p>Информация о возвратах</p>
          </li>
          <li>
            <img
              src="https://images.vexels.com/media/users/3/136808/isolated/preview/d3455a22af5f3ed7565fb5fb71bb8d43-send-message-icon-by-vexels.png"
              alt=""
            />
            <p>Предпочтительные способы связи</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
