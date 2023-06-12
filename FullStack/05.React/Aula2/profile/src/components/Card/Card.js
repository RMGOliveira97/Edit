import { useState } from "react";
import React from "react";
import "./Card.scss";
import MyPhoto from "../../assets/images/MyPhoto.png";

function Card({ borderImage, nameSize, colorText, click }) {
  const [city, setCity] = useState("Lisbon");

  return (
    <div className="card">
      <img className={borderImage} src={MyPhoto} alt="profileImage"></img>
      <p className={nameSize}>Rodolfo Oliveira</p>
      <p>Learning Full Stack Development</p>
      <p className={colorText}>{city}</p>
      <button onClick={() => setCity("Porto")}>Change city</button>
      <button onClick={click}>Save</button>
    </div>
  );
}

export default Card;
