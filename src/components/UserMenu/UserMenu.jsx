import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <button onClick={handleClick} type="button" className={s.button}>
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
