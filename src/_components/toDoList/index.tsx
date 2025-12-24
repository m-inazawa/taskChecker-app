import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import "./style.css";


export const TaskField = () => {
  const menuTitle = <MenuIcon className="add_Menu_icon" />;
  const addCircleOutlineIcon = <AddCircleOutlineIcon className="add_circle_outline_icon"/>
  return (
    <div className="section">
      <div className="Menu_field">
        <p>{menuTitle}Todo{addCircleOutlineIcon}</p>
      </div>
      <div className="Menu_field">
        <p>{menuTitle}Pending{addCircleOutlineIcon}</p>
      </div>
      <div className="Menu_field">
        <p>{menuTitle}Doing(ToDay){addCircleOutlineIcon}</p>
      </div>
      <div className="Menu_field">
        <p>{menuTitle}WIP{addCircleOutlineIcon}</p>
      </div>
      <div className="Menu_field">
        <p>{menuTitle}Check{addCircleOutlineIcon}</p>
      </div>
      <div className="Menu_field">
        <p>{menuTitle}Done{addCircleOutlineIcon}</p>
      </div>
    </div>
  )
}