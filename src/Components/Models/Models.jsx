import React from "react";
import style from "./Models.module.css";
const Models = () => {
  return (
    <div className={style.models}>
      <div className={style.wrapper}>
        <img
          src="https://content.asos-media.com/-/media/homepages/mw/2021/02/15/mw_artisan_outlook_moment_870x1110.jpg"
          alt=""
        />
        <div className={style.block}>
          <span>ДУХ ТВОРЧЕСТВА</span>
          <p>Настроение творить</p>
          <button>КУПИТЬ ТРЕНДОВЫЕ МОДЕЛИ</button>
        </div>
      </div>
      <div className={style.wrapper}>
        <img
          src="https://content.asos-media.com/-/media/homepages/mw/2021/02/15/mw_bershka_moment_870x1110.jpg"
          alt=""
        />
        <div className={style.block}>
          <span>BERSHKA</span>
          <p>Обнови свой стиль</p>
          <button>КУПИТЬ</button>
        </div>
      </div>
    </div>
  );
};
export default Models;
