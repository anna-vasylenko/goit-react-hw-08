import { Link } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div className={s.homePage}>
        <h1 className={s.title}>Welcome to Your Personal Phonebook!</h1>
        <Link className={s.button} to="/login">
          Get started
        </Link>
      </div>
    </>
  );
};

export default HomePage;
