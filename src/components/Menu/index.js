import React from "react";

const Menu = (props) => (
  <div>
    {props.damjuulah.filter((el) => (
      <div key={el.id}>{el.name}</div>
    ))}
  </div>
);

export default Menu;

// <div key={el.id}>{el.name}</div>
