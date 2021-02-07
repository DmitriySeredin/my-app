import React from "react";
import Actions from "./Actions/Actions";
import Products from "./Products/Products";
import Search from "./Search/Search";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header">
      <Products />
      <Search />
      <Actions />
    </div>
  );
};
export default Header;
