import { useDataState } from "../../hooks/useDataState";
import { Task } from "../task";
import { type TaskType } from "../../interfaces/TaskType";
import "./toDoList.css";
import "./style.css";

const statusLists = [
  { id: 0, label: "Todo"},
  { id: 1, label: "Pending"},
  { id: 2, label: "Doing(ToDay)"},
  { id: 3, label: "WIP"},
  { id: 4, label: "Check"},
  { id: 5, label: "Done"},
];

  export const ToDoList = () => {
  const { tasksData, genresData, selectGenreId=0 } = useDataState();

  if (!selectGenreId) return null;

  const selectedGenre = genresData.find((g) => g.id === selectGenreId);
  if (!selectedGenre) return null;

  const tasksInGenre = tasksData.filter(
    (task: TaskType) => task.genreId === selectedGenre.id
  );

  return (
    <div className="task_status_grid">
      {statusLists.map((status) => {
        const filteredTasks = tasksInGenre.filter((task) => task.status === status.id);

        return(
          <div key={status.id} className="status_column">
            {filteredTasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </div>
        )
      })}
    </div>
  )
};