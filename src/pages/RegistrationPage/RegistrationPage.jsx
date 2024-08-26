import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const RegistrationPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div className="pageWrapper">
      <h2 className="pageTitle">Registration</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
