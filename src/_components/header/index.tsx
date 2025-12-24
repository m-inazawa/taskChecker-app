import DoneAllIcon from '@mui/icons-material/DoneAll';
import './style.css';

export const Header = () => {
  return (
    <div className="header">
      <DoneAllIcon className="header_icon" />
      <span className="header_title">Task Checker</span>
    </div>
  )
}