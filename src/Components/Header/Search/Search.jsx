import React from "react";
import style from "./Search.module.css";
const Search = () => {
  return (
    <form>
      <input placeholder="Искать" type="Текст" />
      <button type="submit">Поиск</button>
    </form>
  );
};
export default Search;
