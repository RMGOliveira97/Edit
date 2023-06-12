import React from "react";
import "./Button.scss";

function Button({ click, children, type, disabled }) {
  return <button onClick={click} type={type} disabled={disabled}>{children}</button>;
}

export default Button;
