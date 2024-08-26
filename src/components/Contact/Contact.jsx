import { FaRegUser } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { setCurrentContact } from "../../redux/contacts/slice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.contact}>
      <div className={s.textWrapper}>
        <div className={s.iconWrapper}>
          <FaRegUser />
          <p className={s.name}>{name}</p>
        </div>
        <div className={s.iconWrapper}>
          <MdPhoneIphone />
          <p className={s.number}>{number}</p>
        </div>
      </div>
      <div className={s.buttonsWraper}>
        <button
          className={s.deleteButton}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
        <button
          className={s.changeButton}
          onClick={() => dispatch(setCurrentContact({ id, name, number }))}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Contact;
