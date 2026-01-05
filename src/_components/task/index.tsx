import "./style.css"
import { useState } from "react";
import { FormModal } from "../modal";
import DeleteIcon from '@mui/icons-material/Delete';
import type { TaskType } from "../../interfaces/TaskType"
import { DataContext } from "../../pages/home";
import { useContext } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export interface TaskProps {
  task: TaskType;
}

export const Task = ( {task}: TaskProps) => {
  const { dispatch } = useContext(DataContext);

  const isExpired = new Date(task.deadlineDate) <= new Date();
  const formatter = new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  });
  const formattedDeadline = formatter.format(new Date(task.deadlineDate));

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };



  const handleDelete = () => {
    if (window.confirm(`${task.name} を削除してもよろしいですか？`)) {
      dispatch({ 
        type: "taskDelete", 
        payload: { id: task.id } 
      });
    }
  };

  const addCircleOutlineIcon = <AddCircleOutlineIcon
                                className="add_circle_outline_icon"
                                onClick={handleOpen}
                                />

  return (
    <div className={`task ${isExpired ? "task-expired" : "" }`}>
      <div className="task_header">
        <span className="task_date">{formattedDeadline}</span>
        {addCircleOutlineIcon}
        <DeleteIcon className="delete_icon" onClick={handleDelete}></DeleteIcon>
        <FormModal
            handleClose={handleClose}
            isOpen={isOpen}
            targetView="3"
            editingTask={task}
            showButtons={false}
          />
      </div>
      <div className="task_text_contents">
        <p className="task_title">{task.name}</p>
        <p className="task_sentence">{task.explanation}</p>
      </div>
    </div>
  )
} 