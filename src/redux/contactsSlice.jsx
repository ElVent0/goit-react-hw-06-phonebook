import { createSlice } from '@reduxjs/toolkit';

const initialState = { contacts: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      console.log(1111, state);
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      const findedIndex = state.contacts.findIndex(
        item => item.id === action.payload
      );
      state.contacts.splice(findedIndex, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
