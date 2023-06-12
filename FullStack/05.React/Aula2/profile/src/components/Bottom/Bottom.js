import React from "react";
import "./Bottom.scss";
import editLogo from "./../../assets/images/editLogo.png";

function Bottom() {
  const current = new Date();
  const currentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div className="bottom">
      <img src={editLogo} alt="editLogo"></img>
      <p>{currentDate}</p>
    </div>
  );
}

export default Bottom;
