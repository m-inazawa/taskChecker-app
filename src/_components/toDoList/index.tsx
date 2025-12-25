import React, { useState } from "react";
import { FormModal } from "../modal";
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import "./style.css";


export const TaskField = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const menuTitle = <MenuIcon className="add_Menu_icon" />;
  const addCircleOutlineIcon = <AddCircleOutlineIcon
                                className="add_circle_outline_icon"
                                onClick={handleOpen}
                                />
  return (
    <div className="section">
      <div className="Menu_field">
        <p>{menuTitle}Todo{addCircleOutlineIcon}</p>
        <FormModal
          handleClose={handleClose}
          isOpen={isOpen}
          targetView="2"
          showButtons={false}
        />
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