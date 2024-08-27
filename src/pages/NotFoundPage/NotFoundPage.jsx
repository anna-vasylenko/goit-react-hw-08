import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const NotFoundPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <div className={s.notFoundPage}>
        <h1 className={s.title}>
          We can not find the page you are looking for!
        </h1>
        {isLoggedIn ? (
          <Link className={s.button} to="/contacts">
            Phonebook
          </Link>
        ) : (
          <Link className={s.button} to="/login">
            Home Page
          </Link>
        )}
      </div>
    </>
  );
};

export default NotFoundPage;
