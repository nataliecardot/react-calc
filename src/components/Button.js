import React from 'react';
import './Button.css';

const isOperator = val => {
  // Return true if it's a number, middle dot (gets converted to decimal point by method), or equals sign
  return !isNaN(val) || val === '·' || val === '=';
};

export const Button = props => (
  <div
    className={`button-wrapper ${
      isOperator(props.children) ? null : 'operator'
    }`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);