import Modal from "react-modal";
import { GenreBody } from "./genreBody";
import { useState } from "react";
import { IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import "./style.css"
import { SelectFormModal2 } from "./selectFormModal2";
import { TaskBody } from "./taskBody";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  targetView?: string;
  showButtons?: boolean;
  isInsideModal?: boolean;
}

if (typeof window !== "undefined") {
  Modal.setAppElement("#root");
}

export const FormModal = ({ isOpen , handleClose, targetView="0", showButtons=true }: Props) => {
  const [viewMode, setViewMode] = useState(targetView);

  const renderBody = () => {
    switch (viewMode) {
      case "0": return <GenreBody/>;
      case "1": return <SelectFormModal2/>;
      case "2": return <TaskBody />;
      default : return null;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      shouldCloseOnOverlayClick={true}//枠外クリック可能
    > 
      <div className="button_group">
        {showButtons && (
          <>
            {[ 
              { label: "ジャンル編集", value:"0" },
              { label: "task編集", value:"1" },
            ].map((item) => (
              <button
                key={item.value}
                onClick={() => setViewMode(item.value)}
                className={`rounded-btn ${viewMode === item.value ? 'active' : '' }`}
              >
              {item.label}
            </button>
          ))}
        </>
        )}

        <IconButton onClick={handleClose}>
          <CancelIcon className="Modal_cancel_btn"/>
        </IconButton>
      </div>
      <div>
        {renderBody()}
      </div>

    </Modal>
  )
}