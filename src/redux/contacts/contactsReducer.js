//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import contactsActions from './contactsActions';
import handleContactsReducer from './handleContactsReducer';

const items = createReducer([], {
	[contactsActions.fetchContactsSuccess]: handleContactsReducer.fetchContacts,
	[contactsActions.addContactSuccess]: handleContactsReducer.onAddContact,
	[contactsActions.removeContactSuccess]: handleContactsReducer.onRemoveContact,
});

const filter = createReducer('', {
	[contactsActions.changeFilter]: handleContactsReducer.onChangeFilter,
});

export default combineReducers({
	items,
	filter,
});
