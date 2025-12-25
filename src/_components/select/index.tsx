import { useState } from "react";
import "./style.css"
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { FormModal } from "../modal/index";

interface Props {
  isInsideModal?: boolean; 
}

export const Select = ({ isInsideModal = false }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <select className="select">
        <option value={0}>0</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
      </select>
      {isInsideModal ? (
        <IconButton className="ModalStyle">
          <AddCircleOutlineIcon />
        </IconButton>
      ) : (
      <IconButton onClick={handleOpen}>
        <AddCircleOutlineIcon className="AAddCircleOutlineIcon"/>
      </IconButton>
      )}
      {!isInsideModal && (
        <FormModal isOpen={isOpen} handleClose={handleClose} >
        </FormModal>
      )}
    </div>
  )
}