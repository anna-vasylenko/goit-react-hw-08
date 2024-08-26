import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div className="pageWrapper">
      <h2 className="pageTitle">Login</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
