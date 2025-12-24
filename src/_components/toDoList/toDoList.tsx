import "./toDoList.css";
import { Task } from "../task/index"

export const ToDoList = () => {
  return (
    <div className="section">
      <div className="task_field">
        <Task />
      </div>
      <div className="task_field">
        <Task />
      </div>
      <div className="task_field">
        <Task />
      </div>
      <div className="task_field">
        <Task />
      </div>
      <div className="task_field">
        <Task />
      </div>
      <div className="task_field">
        <Task />
      </div>
    </div>
  )
}