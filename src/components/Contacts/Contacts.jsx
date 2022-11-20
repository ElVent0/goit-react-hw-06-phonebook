import css from './Contacts.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

const Contacts = () => {
  const dispatch = useDispatch();
  const store = useSelector(store => store);

  const filteredArray = () => {
    let filteredArray = [];
    if (store.filter === '') {
      filteredArray = store.contacts.contacts;
    } else if (store.filter !== '') {
      return store.contacts.contacts.filter(item =>
        item.name.toLowerCase().includes(store.filter.toLowerCase())
      );
    }
    return filteredArray;
  };

  return (
    <>
      <ul className={css.list}>
        {filteredArray().map(item => {
          return (
            <li className={css.item} key={item.name}>
              {item.name}: {item.number}
              <button
                className={css.button}
                name={item.name}
                onClick={() => {
                  dispatch(deleteContact(item.name));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Contacts;

Contacts.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};
