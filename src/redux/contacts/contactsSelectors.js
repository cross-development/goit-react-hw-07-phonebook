//Core
import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getContactId = (state, contactId) => contactId;

const getVisibleContacts = createSelector(
	[getContacts, getFilter],
	(contacts, filter) =>
		contacts.filter(({ name }) =>
			name.toLowerCase().includes(filter.toLowerCase()),
		),
);

const getContactById = createSelector(
	[getContacts, getContactId],
	(contacts, contactId) => contacts.find(({ id }) => id === contactId),
);

export default {
	getContacts,
	getFilter,
	getVisibleContacts,
	getContactById,
};
