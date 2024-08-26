import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div>
      <ul className={s.listNav}>
        <li>
          <NavLink className={s.link} to="/register">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink className={s.link} to="/login">
            Log In
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;
