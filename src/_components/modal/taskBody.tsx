import { useState, useContext } from "react";
import { Select } from "../select";
import { DataContext } from "../../pages/home";
import "./style.css";

interface TaskBodyProps {
  onClose: () => void;
}

export const TaskBody = ({ onClose }: TaskBodyProps) => {
  const { data, dispatch } = useContext(DataContext);

  const [name, setName] = useState("");
  const [explanation, setExplanation] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");
  const [genreId, setGenreId] = useState<number>(0);

  const handleSubmit = () => {
    if (!name) {
      alert("タイトルを入力してください");
      return;
    }

    const newTask = {
      id: Date.now(), 
      name: name,
      explanation: explanation,
      deadlineDate: deadlineDate,
      status: 0,
      genreId: genreId,
    };

    dispatch({ type: "taskAdd", payload: { task: newTask } });

    setName("");
    setExplanation("");
    setDeadlineDate("");
    setGenreId(0);

    onClose();

    alert("タスクを追加しました！");
  };
  
  return (
    <form className="modal_body">
      <h2 className="input_menu">タスクを追加</h2>
      <div>
        <h4 className="input_title">ジャンル</h4>
        <div className="task_genre">
          <Select
            genres={data.genresData} 
            isInsideModal={true} 
            value={genreId}
            changeSelect={(e) => setGenreId(Number(e.target.value))}
          />
        </div>
        
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
        value="送信" 
        onClick={handleSubmit} 
      />
    </form>
  );
};