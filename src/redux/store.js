//Core
import { configureStore } from '@reduxjs/toolkit';
//Redux
import contactsReducer from './contacts/contactsReducer';

const store = configureStore({
	reducer: {
		contacts: contactsReducer,
	},
});

export default store;
