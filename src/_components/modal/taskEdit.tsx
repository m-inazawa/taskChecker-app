import { useState, useContext } from "react";
import { DataContext } from "../../pages/home";
import type { TaskType } from "../../interfaces/TaskType";
import "./style.css";

interface TaskEditProps {
  editingTask: TaskType;
  onClose: () => void;
}

export const TaskEdit = ({ editingTask, onClose }: TaskEditProps) => {
  const { dispatch } = useContext(DataContext);

  const [name, setName] = useState(editingTask.name);
  const [explanation, setExplanation] = useState(editingTask.explanation);
  const [deadlineDate, setDeadlineDate] = useState(editingTask.deadlineDate);

  const handleUpdate = () => {
    if (!name) return alert("タイトルを入力してください");

    const updatedTask: TaskType = {
      ...editingTask,
      name,
      explanation,
      deadlineDate,
    };

    dispatch({ type: "taskEdit", payload: { task: updatedTask } });
    
    onClose();
  };

  return (
    <div className="modal_body">
      <h2 className="input_menu">タスクを編集</h2>
      <div>
        <h4 className="input_title">タイトル</h4>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />

        <h4 className="input_title">説明</h4>
        <textarea 
          value={explanation} 
          onChange={(e) => setExplanation(e.target.value)} 
        />

        <h4 className="input_title">期限</h4>
        <input 
          className="input_date" 
          type="date" 
          value={deadlineDate} 
          onChange={(e) => setDeadlineDate(e.target.value)} 
        />
      </div>
      <input 
        className="input_submit" 
        type="button" 
        value="変更を保存" 
        onClick={handleUpdate} 
      />
    </div>
  );
};