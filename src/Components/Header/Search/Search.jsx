import React from "react";
import style from "./Search.module.css";
const Search = () => {
  return (
    <div className={style.Search}>
      <form className={style.form}>
        <input placeholder="Искать" type="text" className={style.input} />
        <button type="submit" className={style.button} />
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/search-1768073-1502246.png"
          alt=""
          className={style.img}
        />
      </form>
    </div>
  );
};
export default Search;
