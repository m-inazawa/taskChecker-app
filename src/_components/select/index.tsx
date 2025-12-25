import { useState } from "react";
import "./style.css"
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { FormModal } from "../modal/modal";
import { SelectFormModal } from "../formModal/selectFormModal"

// interface FormProps {
//   onAdd: (text: string) => void;
// }

export const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <select className="select">
        <input type="text" placeholder="TECH CAMP" className="task-input"/>
        <option value={0}>0</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
      </select>
      <IconButton onClick={handleOpen}>
        <AddCircleOutlineIcon className="AAddCircleOutlineIcon"/>
      </IconButton>
      <FormModal isOpen={isOpen} handleClose={handleClose} >
        <SelectFormModal/>
      </FormModal>
    </div>
  )
}