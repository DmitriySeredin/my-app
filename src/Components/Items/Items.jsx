import React from "react";
import style from "./Items.module.css";
const Items = () => {
  return (
    <section className={style.section}>
      <img
        className={style.bigImg}
        src="https://content.asos-media.com/-/media/homepages/mw/2021/02/15/desktop/ru-mw_desktophero_global_1258x600.jpg"
        alt=""
      />
      <div className={style.items}>
        <div className={style.imgWrapper}>
          <img
            className={style.img}
            src="https://content.asos-media.com/-/media/homepages/mw/2021/02/15/category_mwinclusive_ru.jpg"
            alt=""
          />

          <span>TALL & PLUS-SIZE</span>
          <p>Ещё больше размеров для любимых образов</p>
        </div>
        <div className={style.imgWrapper}>
          <img
            className={style.img}
            src="https://content.asos-media.com/-/media/homepages/mw/2021/02/15/mw_denim_moment_870x1110.jpg"
            alt=""
          />

          <span>ДЖИНСЫ НОВОГО СЕЗОНА</span>
          <p>Кажется время, пришло...</p>
        </div>
        <div className={style.imgWrapper}>
          <img
            className={style.img}
            src="https://content.asos-media.com/-/media/homepages/mw/2021/02/15/ww_mw_calf_boots_moment_870x1110.jpg"
            alt=""
          />

          <span>БОТИНКИ</span>
          <p>Приведут тебя к цели</p>
        </div>
        <div className={style.imgWrapper}>
          <img
            className={style.img}
            src="https://content.asos-media.com/-/media/homepages/mw/2021/02/15/mw_dark_future_moment_870x1110.jpg"
            alt=""
          />

          <span>DARK FUTURE</span>
          <p>Обрати внимание на этот бренд</p>
        </div>
      </div>
    </section>
  );
};
export default Items;
