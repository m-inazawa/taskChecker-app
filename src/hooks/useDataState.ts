import { useContext } from 'react';
import { DataContext } from '../pages/home';
import { useState } from 'react';
import type { TaskType } from "../interfaces/TaskType";
import type { GenreType } from "../interfaces/GenreType";

interface DataStateReturn {
  tasksData: TaskType[];
  genresData: GenreType[];
  dispatch: React.Dispatch<any>;
  selectGenreId: number;
}

export const useDataState = (): DataStateReturn => {
  const context = useContext(DataContext);

  if (!context) {
    return { tasksData: [], genresData: [], selectGenreId: 0, dispatch: () => {} };
  }

  const { data, dispatch, selectGenreId } = context;

  const tasksData = data?.tasksData || [];
  const genresData = data?.genresData || [];

  return {
    tasksData,
    genresData,
    selectGenreId,
    dispatch
  };
};

// export const useDataState = () => {
//   const [tasksData, setTasksData] = useState<TaskType[]>([]);
//   const [genresData, setGenresData] = useState<GenreType[]>([]);

//   const addTask = (title: string, genreId: number) => {
//     const newTask: TaskType = {
//       id: Math.random().toString(36).substring(2, 9), // 簡易的なID生成
//       title,
//       genreId,
//       completed: false,
//     };
//     setTasksData((prev) => [...prev, newTask]);
//   };

//   const toggleTask = (taskId: string) => {
//     setTasksData((prev) =>
//       prev.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
//     );
//   };

//   // タスクを削除する
//   const deleteTask = (taskId: string) => {
//     setTasksData((prev) => prev.filter((t) => t.id !== taskId));
//   };

//   // ジャンルを追加する
//   const addGenre = (name: string) => {
//     const newGenre: GenreType = {
//       id: Math.random().toString(36).substring(2, 9),
//       name,
//     };
//     setGenresData((prev) => [...prev, newGenre]);
//   };

//   // 3. コンポーネントで使うために return する
//   return {
//     tasksData,
//     genresData,
//     addTask,
//     toggleTask,
//     deleteTask,
//     addGenre,
//   };
// };