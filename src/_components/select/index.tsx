import { useState } from "react";
import "./style.css"

// interface FormProps {
//   onAdd: (text: string) => void;
// }

export const Select = () => {
  return (
    <div>
      <select className="select">
        <input type="text" placeholder="TECH CAMP" className="task-input"/>
        <option value={0}>0</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
      </select>
    </div>
  )
}