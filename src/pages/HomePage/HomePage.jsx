import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./HomePage.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <div className={s.homePage}>
        <h1 className={s.title}>Welcome to Your Personal Phonebook!</h1>
        {isLoggedIn ? (
          <Link className={s.button} to="/contacts">
            Phonebook
          </Link>
        ) : (
          <Link className={s.button} to="/login">
            Get started
          </Link>
        )}
      </div>
    </>
  );
};

export default HomePage;
