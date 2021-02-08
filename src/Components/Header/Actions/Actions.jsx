import React from "react";
import style from "./Actions.module.css";
const Actions = () => {
  return (
    <div className={style.icons}>
      <div className={style.border}>
        <img
          className={style.img}
          src="https://pics.freeicons.io/uploads/icons/png/19339625881548233621-512.png"
          alt="Профиль"
        />
      </div>
      <div className={style.border}>
        <img
          src="https://image.flaticon.com/icons/png/24/9/9294.png"
          alt=""
          className={style.img}
        />
      </div>
      <div className={style.border}>
        <img
          src="https://cdn2.iconfinder.com/data/icons/celebration-party/48/88-512.png"
          alt=""
          className={style.img}
        />
      </div>
    </div>
  );
};
export default Actions;
