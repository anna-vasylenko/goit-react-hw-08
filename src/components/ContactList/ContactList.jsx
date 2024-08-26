import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/filters/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={s.contactsList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={s.contactItem}>
          <Contact {...contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
