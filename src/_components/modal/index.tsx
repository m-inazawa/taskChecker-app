import Modal from "react-modal";
import { GenreBody } from "./genreBody";
import { useState } from "react";
import { IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import "./style.css"
import { GenreEdit } from "./genreEdit";
import { TaskBody } from "./taskBody";
import { TaskEdit } from "./taskEdit";
import { type TaskType } from "../../interfaces/TaskType";
import type { GenreType } from "../../interfaces/GenreType";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  targetView?: string;
  showButtons?: boolean;
  isInsideModal?: boolean;
  editingTask?: TaskType;
  editingGenre?: GenreType;
}

if (typeof window !== "undefined") {
  Modal.setAppElement("#root");
}

export const FormModal = ({
  isOpen,
  handleClose,
  targetView="0",
  showButtons=true,
  editingTask,
  editingGenre
 }: Props) => {
  const [viewMode, setViewMode] = useState(targetView);

  const renderBody = () => {
    switch (viewMode) {
      case "0": return <GenreBody />;
      // case "0": return <GenreBody onClose={handleClose}/>;
      case "1":
        return editingGenre ? (
          <GenreEdit editingGenre={editingGenre} onClose={handleClose} />
        ) : (
          <p>ジャンルを選択してください</p>
        );
      // case "1": return <GenreEdit onClose={handleClose}/>;
      case "2": return <TaskBody onClose={handleClose}/>;
      case "3":
        return editingTask ? (
          <TaskEdit editingTask={editingTask} onClose={handleClose} />
        ) : (
          <p>エラー：タスクデータが見つかりません</p>
        );
      default : return null;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      shouldCloseOnOverlayClick={true}
    > 
      <div className="button_group">
        {showButtons && (
          <>
            {[ 
              { label: "ジャンル追加", value:"0" },
              { label: "ジャンル編集", value:"1" },
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
        {!showButtons && (
          <>
            {[ 
              { label: "task追加", value:"2" },
              { label: "task編集", value:"3" },
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