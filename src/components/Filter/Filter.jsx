import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';
import styles from './Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  function handleFilterInputChange(event) {
    const { value } = event.currentTarget;
    dispatch(setFilter(value));
  }

  return (
    <label className={styles.Label}>
      <input
        className={styles.Input}
        type="text"
        name="filter"
        placeholder="find contacts by name"
        value={filter}
        onChange={handleFilterInputChange}
      ></input>
    </label>
  );
}
