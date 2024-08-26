import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import s from "./AppBar.module.css";
import { Link } from "react-router-dom";

const AppBar = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.header}>
      {isLoggedIn ? (
        <p className={s.text}>Welcome, {user.name}</p>
      ) : (
        <Link className={s.text} to="/">
          Phonebook
        </Link>
      )}
      <div className={s.navigation}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
