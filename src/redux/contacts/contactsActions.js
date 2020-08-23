//Core
import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('contacts/fetchRequest');
const fetchContactsSuccess = createAction('contacts/fetchSuccess');
const fetchContactsFailure = createAction('contacts/fetchFailure');

const addContactRequest = createAction('contacts/addRequest');
const addContactSuccess = createAction('contacts/addSuccess');
const addContactFailure = createAction('contacts/addFailure');

const removeContactRequest = createAction('contacts/removeRequest');
const removeContactSuccess = createAction('contacts/removeSuccess');
const removeContactFailure = createAction('contacts/removeFailure');

const changeFilter = createAction('contacts/changeFilter');

export default {
	fetchContactsRequest,
	fetchContactsSuccess,
	fetchContactsFailure,

	addContactRequest,
	addContactSuccess,
	addContactFailure,

	removeContactRequest,
	removeContactSuccess,
	removeContactFailure,

	changeFilter,
};
