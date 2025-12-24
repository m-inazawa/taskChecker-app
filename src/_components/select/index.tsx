import "./style.css"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const Select = () => {
  return (
    <div>
      <select className="select">
        <input type="text" placeholder="TECH CAMP" className="task-input"/>
        <option value={0}>0</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
      </select>
      <AddCircleOutlineIcon className="AAddCircleOutlineIcon"/>
    </div>
  )
}