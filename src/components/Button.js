import React from "react";
import "./Button.css";

const isOperator = val => {
  // Return true if it's a number, decimal point, or equals sign
  return !isNaN(val) || val === "." || val === "=";
};

const Button = props => (
  <div
    className={`button-wrapper ${
      isOperator(props.children) ? null : "operator"
    }`}
  >
    {props.children}
  </div>
);

export default Button;
