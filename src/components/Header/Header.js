import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <a href="/#" className={s.logo}>
          Header
        </a>
      </div>
    </header>
  );
}

export default Header;
