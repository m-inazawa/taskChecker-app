import MenuIcon from '@mui/icons-material/Menu';
import "./style.css";

type TaskFieldProps = {
  onMenuClick: () => void;
};

export const TaskField = ({ onMenuClick}: TaskFieldProps) => {
  const menuTitle = <MenuIcon className="add_Menu_icon" onClick={onMenuClick}/>;
  const menuItems = ["Todo", "Pending", "Doing(ToDay)", "WIP", "Check", "Done"];
  // const addCircleOutlineIcon = <AddCircleOutlineIcon
  //                               className="add_circle_outline_icon"
  //                               onClick={handleOpen}
  //                               />
  return (
    <div className="section">
      {menuItems.map((item) => (
        <div className="Menu_field" key={item}>
          <p>
            {menuTitle}
            {item}
            {/* {addCircleOutlineIcon} */}
          </p>
        </div>
      ))}
    </div>
  )
}