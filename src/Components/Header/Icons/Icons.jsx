import React, { useState } from "react";
import Profile from "./DropDown/Profile";
import style from "./Icons.module.css";
const Icons = () => {
  const [value, setValue] = useState(false);
  let toggle = (value) => {
    if (value === false) {
      return true;
    }
    return false;
  };
  return (
    <div className={style.icons}>
      <div className={style.border}>
        <button onClick={() => setValue(toggle)}>
          <img
            className={style.img}
            src="https://pics.freeicons.io/uploads/icons/png/19339625881548233621-512.png"
            alt="Профиль"
          />
        </button>
        {value ? <Profile /> : null}
      </div>
      <div className={style.border}>
        <button>
          <img
            src="https://image.flaticon.com/icons/png/24/9/9294.png"
            alt=""
            className={style.img}
          />
        </button>
      </div>
      <div className={style.border}>
        <button>
          <img
            src="https://cdn2.iconfinder.com/data/icons/celebration-party/48/88-512.png"
            alt=""
            className={style.img}
          />
        </button>
      </div>
    </div>
  );
};
export default Icons;
