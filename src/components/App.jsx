// import React, { useState } from 'react';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import css from './App.module.css';
// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../redux/filterSlice';

export const App = () => {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   if (localStorage.getItem('contacts')) {
  //     try {
  //       setContacts(() => JSON.parse(localStorage.getItem('contacts')));
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  // }, []);

  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  const store = useSelector(store => store);

  console.log(store);
  const onFilteredArray = () => {
    let filteredArray = [];
    if (store.filter === '') {
      filteredArray = [...store.contacts.contacts];
    } else if (store.filter !== '') {
      console.log('dknkjdfnvkjdfng', store);
      return store.contacts.contacts.filter(item =>
        item.name.toLowerCase().includes(store.filter.toLowerCase())
      );
    }
    return filteredArray;
  };

  return (
    <>
      <h2 className={css.header}>Phonebook</h2>
      <Phonebook />
      <h2 className={css.header}>Contacts</h2>
      <Filter handleChange={handleChange}></Filter>
      <Contacts filteredArray={onFilteredArray} />
    </>
  );
};
