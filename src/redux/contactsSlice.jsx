import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducer: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(userName, number) {
        return {
          payload: {
            id: nanoid(),
            name: userName,
            number: number,
          },
        };
      },
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact } = contactsSlice.actions;
