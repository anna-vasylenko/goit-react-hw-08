import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);
  return (
    <div className={s.wrapper}>
      <label className={s.label}>
        <input
          type="text"
          name="text"
          value={filterValue}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          className={s.input}
        />
        Find contacts
      </label>
    </div>
  );
};

export default SearchBox;
