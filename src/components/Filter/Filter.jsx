import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Filter = ({ handleChange }) => {
  const filter = useSelector(store => store.filter);
  console.log('filter', filter);
  return (
    <>
      <p className={css.paragraph}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter.filter}
        onChange={handleChange}
      />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func,
};
