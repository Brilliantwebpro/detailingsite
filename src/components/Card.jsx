import React from "react";

const Card = ({ title, text, children }) => {
  return (
    <div className="card">
      {title && <h3>{title}</h3>}
      {text && <p>{text}</p>}
      {children}
    </div>
  );
};

export default Card;
