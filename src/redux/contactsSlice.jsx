import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = { contacts: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // addContact: {
    //   reducer(state, action) {
    //     state.contacts.push(action.payload);
    //   },
    //   prepare(userName, number) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         name: userName,
    //         number: number,
    //       },
    //     };
    //   },
    // },
    addContact(state, action) {
      state.array.push(action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact } = contactsSlice.actions;
