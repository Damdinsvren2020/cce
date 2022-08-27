import React from "react";
import style from "./style.css";

const MenuTitle = (props) => {
  return (
    <div className={style.MenuTitleContainer}>
      <h3>{props.title}</h3>
    </div>
  );
};

export default MenuTitle;
