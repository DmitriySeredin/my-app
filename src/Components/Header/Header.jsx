import React from "react";
import Search from "./Search/Search";
import style from "./Header.module.css";
import Logo from "./Logo/Logo";
import Icons from "./Icons/Icons";
const Header = () => {
  return (
    <div className={style.Header}>
      <Logo />
      <Search />
      <Icons />
    </div>
  );
};
export default Header;
