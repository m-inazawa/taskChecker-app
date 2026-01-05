import { useReducer } from "react";
import type { TaskType } from "../interfaces/TaskType";
import type { GenreType } from "../interfaces/GenreType";

export type dataAction = 
  | { type: "tasksUpdate"; payload: { task: TaskType[] } }
  | { type: "genresUpdate"; payload: { genre: GenreType[] } }
  | { type: "taskAdd"; payload: { task: TaskType } }    // 追加用
  | { type: "taskDelete"; payload: { id: number } }     // 削除用
  | { type: "taskEdit"; payload: { task: TaskType } }
  | { type: "genreEdit"; payload: { genre: GenreType } }
  | { type: "genreAdd"; payload: { genre: GenreType } };

export type Data = {
  tasksData: TaskType[];
  genresData: GenreType[];
};

export const useDataReducer = (): [Data, ({ type, payload }: dataAction) => void] => {
  const initialData: Data = {
      tasksData: [],
      genresData: [],
  }

  const reducer = (state: Data, action: dataAction) => {
    switch (action.type) {
      case "tasksUpdate":
        return { ...state, tasksData: action.payload.task || state.tasksData };
      case "genresUpdate":
        return { ...state, genresData: action.payload.genre || state.genresData};
      case "taskAdd":
        return { ...state, tasksData: [...state.tasksData, action.payload.task] };
      case "taskDelete":
        return {...state, tasksData: state.tasksData.filter(task => task.id !== action.payload.id) };
      case "taskEdit":
        return {...state,
          tasksData: state.tasksData.map((task) =>
            task.id === action.payload.task.id ? action.payload.task : task
          ),
        };
      case "genreAdd": // ★追加
        return { 
          ...state, 
          genresData: [...state.genresData, action.payload.genre] 
        };
      case "genreEdit":
        return {
          ...state,
          genresData: state.genresData.map((genre) =>
            genre.id === action.payload.genre.id ? action.payload.genre : genre
          ),
        };
      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(reducer, initialData)
  return [data, dispatch]
};