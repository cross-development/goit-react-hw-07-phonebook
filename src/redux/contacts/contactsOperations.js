//Core
import axios from 'axios';
//Redux
import contactsActions from './contactsActions';

axios.defaults.baseURL = 'http://localhost:2000';

const fetchContacts = () => dispatch => {
	dispatch(contactsActions.fetchContactsRequest());

	axios
		.get('/contacts')
		.then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
		.catch(error => dispatch(contactsActions.fetchContactsFailure(error)));
};

const addContacts = (name, number) => dispatch => {
	dispatch(contactsActions.addContactRequest());

	axios
		.post('/contacts', { name, number })
		.then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
		.catch(error => dispatch(contactsActions.addContactFailure(error)));
};

const removeContact = id => dispatch => {
	dispatch(contactsActions.removeContactRequest());

	axios
		.delete(`/contacts/${id}`)
		.then(() => dispatch(contactsActions.removeContactSuccess(id)))
		.catch(error => dispatch(contactsActions.removeContactFailure(error)));
};

export default {
	fetchContacts,
	addContacts,
	removeContact,
};
