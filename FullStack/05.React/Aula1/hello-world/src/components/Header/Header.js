import React from "react";
import "./Header.scss";
import reactLogo from "../../assets/images/reactLogo.png";

function Header() {
  return (
    <section className="header">
      <img src={reactLogo} alt="ReactLogo"></img>
      <div>
        <p>text 1</p>
        <p>text 2</p>
        <p>text 3</p>
      </div>
    </section>
  );
}

export default Header;
