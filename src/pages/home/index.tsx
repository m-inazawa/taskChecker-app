// import React from "react";
import "./style.css";
import { Header } from "../../_components/header";
import { Select } from "../../_components/select";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


export const Home = () => {
  return (
  <div className="main">
    <Header />
    <div className="genre">
      <Select />
      <AddCircleOutlineIcon
        className="add_circle_outline_icon"/>
    </div>
  </div>
  );
};