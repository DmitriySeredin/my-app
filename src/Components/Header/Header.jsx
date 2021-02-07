import React from "react";
import Actions from "./Actions/Actions";
import Products from "./Products/Products";
import Search from "./Search/Search";
import style from "./Header.module.css";
const Header = () => {
  return (
    <div className={style.Header}>
      <Products />
      <Search />
      <Actions />
    </div>
  );
};
export default Header;
