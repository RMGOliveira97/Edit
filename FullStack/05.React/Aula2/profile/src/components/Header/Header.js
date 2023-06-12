import React from "react";
import "./Header.scss";
import reactLogo from "../../assets/images/reactLogo.png";

function Header() {
  return (
    <section className="header">
      <img src={reactLogo} alt="reactLogo"></img>
      <p>Created by Rodolfo <br></br> at Edit</p>
    </section>
  );
}

export default Header;
