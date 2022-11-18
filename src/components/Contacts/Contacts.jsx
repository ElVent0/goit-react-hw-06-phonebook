import css from './Contacts.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const Contacts = ({ filteredArray }) => {
  const dispatch = useDispatch();

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
                  console.log('sdfjbsdkjf');
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
