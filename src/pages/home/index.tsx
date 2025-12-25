// import React from "react";
import "./style.css";
import { Header } from "../../_components/header";
import { Select } from "../../_components/select";
import { TaskField } from "../../_components/toDoList/index";
import { ToDoList } from "../../_components/toDoList/toDoList";

export const Home = () => {
  return (
    <div className="main">
      <Header />
      <div className="genre">
        <Select />
      </div>
      <div className="contents">
        <TaskField />
        <ToDoList />
      </div>
    </div>
  );
};