import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import {
  fetchContactsSuccessReducer,
  addContactSuccessReducer,
  deleteContactSuccessReducer,
  pendingReducer,
  fulfilledReducer,
  rejectedReducer,
} from 'redux/reducers';

const extraActions = [fetchContacts, addContact, deleteContact];
const getAction = type => isAnyOf(...extraActions.map(action => action[type]));

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
      .addCase(addContact.fulfilled, addContactSuccessReducer)
      .addCase(deleteContact.fulfilled, deleteContactSuccessReducer)
      .addMatcher(getAction('pending'), pendingReducer)
      .addMatcher(getAction('fulfilled'), fulfilledReducer)
      .addMatcher(getAction('rejected'), rejectedReducer),
});

export const contactsReducer = contactsSlice.reducer;
