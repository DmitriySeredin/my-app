import React from "react";
import style from "./Range.module.css";
const Range = () => {
  return (
    <div className={style.range}>
      <div className={style.text}>
        <div className={style.textElement}>
          <h2 className={style.largeText}>РАСПРОДАЖА:</h2>
        </div>
        <div className={style.textElement}>
          <h2 className={style.largeText}>ФИНАЛЬНЫЕ СКИДКИ</h2>
        </div>
        <div className={style.textElement}>
          <h2 className={style.largeText}>(СКОРО ЗАКАНЧИВАЕТСЯ!)</h2>
        </div>
        <div className={style.textElement}>
          <p className={style.smallText}>ДО -80%</p>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Range;
