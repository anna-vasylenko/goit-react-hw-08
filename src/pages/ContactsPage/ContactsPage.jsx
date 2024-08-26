import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import SearchBox from "../../components/SearchBox/SearchBox";
import {
  selectCurrentContact,
  selectError,
  selectLoading,
} from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import s from "./ContactsPage.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import ContactUpdateForm from "../../components/ContactUpdateForm/ContactUpdateForm";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const currentContact = useSelector(selectCurrentContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={s.wrapper}>
      <div className={s.formWrapper}>
        {currentContact ? (
          <ContactUpdateForm {...currentContact} />
        ) : (
          <ContactForm />
        )}
        <SearchBox />
      </div>
      <ContactList />
      {isLoading && <Loader />}
      {isError && (
        <p className={s.errorMessage}>Something went wrong, try again later!</p>
      )}
    </div>
  );
};

export default ContactsPage;
