import React from "react";
import style from "./Search.module.css";
const Search = () => {
  return (
    <div className={style.Search}>
      <form className={style.form}>
        <input placeholder="Искать" type="text" className={style.input} />
        <button type="submit" className={style.button} />
      </form>
    </div>
  );
};
export default Search;
