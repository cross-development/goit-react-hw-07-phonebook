//Core
import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', (name, number) => ({
	payload: {
		contact: {
			id: uuidv4(),
			name,
			number,
		},
	},
}));
const removeContact = createAction('contacts/remove');
const changeFilter = createAction('contacts/changeFilter');

export default {
	addContact,
	removeContact,
	changeFilter,
};

//ДО РЕФАКТОРИНГА
//
// import { v4 as uuidv4 } from 'uuid';
// import actionTypes from './contactsActionTypes';

// const addContact = (name, number) => ({
// 	type: actionTypes.ADD,
// 	payload: {
// 		contact: {
// 			id: uuidv4(),
// 			name,
// 			number,
// 		},
// 	},
// });

// const removeContact = contactId => ({
// 	type: actionTypes.REMOVE,
// 	payload: {
// 		contactId,
// 	},
// });

// const changeFilter = filter => ({
// 	type: actionTypes.CHANGE_FILTER,
// 	payload: {
// 		filter,
// 	},
// });

// export default {
// 	addContact,
// 	removeContact,
// 	changeFilter,
// };
