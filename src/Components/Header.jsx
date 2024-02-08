import React from "react";

const Header = () => {
  return (
    <header className="header">
      <a className="logo" href="#hero">SF018</a>
      <nav className="header__nav">
        <a style={{ "--i": 1 }}  href="#hero">Home</a>
        <a style={{ "--i": 2 }}  href="#about">About</a>
        <a style={{ "--i": 3 }}  href="#project">Projects</a>
        <a style={{ "--i": 4 }}  href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
