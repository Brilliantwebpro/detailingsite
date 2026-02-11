import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, variant = "primary", children, type = "button" }) => {
  const className = `btn btn-${variant}`;
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
};

export default Button;
