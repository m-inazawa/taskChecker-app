import React, { useEffect, useState } from "react";
import { Header } from "../../_components/header";
import { Select } from "../../_components/select";
import { TaskField } from "../../_components/toDoList/index";
import { ToDoList } from "../../_components/toDoList/toDoList";
import { genreRequest } from "../../requests/genreRequest";
import { taskRequest } from "../../requests/taskRequest";
import { type Data, type dataAction, useDataReducer } from "../../hooks/useDataReducer";
// import { useFilterTasks } from "../../hooks/useFilterTasks";
import "./style.css";

type dataContextType = {
  data: Data;
  dispatch: ({ type, payload }: dataAction) => void;
  selectGenreId: number;
};

export const DataContext = React.createContext<dataContextType>(
  {} as dataContextType
);

export const Home = () => {
  const [isListOpen, setIsListOpen] = useState(true);
  const [data, dispatch] = useDataReducer();
  const [selectGenreId, setSelectGenreId] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const genres = await genreRequest("fetchGenres");
      const tasks = await taskRequest("fetchTasks");
      dispatch({ type: "genresUpdate", payload: { genre: genres } });
      dispatch({ type: "tasksUpdate", payload: { task: tasks } });
    };
    fetchData();
  }, [dispatch]);

    useEffect(() => {
    console.log(data);
  }, [data]);

  const changeSelectGenreId = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const id = Number(event.target.value);
    setSelectGenreId(id);
  };
    
  return (
    <DataContext.Provider value={{ data, dispatch, selectGenreId }}>
      <div className="main">
        <Header />
        <div className="genre">
          <Select genres={data.genresData} value={selectGenreId} changeSelect={changeSelectGenreId} />
        </div>
        <div className="contents">
          <TaskField  onMenuClick={() => setIsListOpen(!isListOpen)} />
          {isListOpen && <ToDoList/>}
        </div>
      </div>
    </DataContext.Provider>
  );
};