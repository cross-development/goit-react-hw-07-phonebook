const fetchContacts = (state, { payload }) => payload;
const onAddContact = (state, { payload }) => [...state, payload];
const onRemoveContact = (state, { payload }) => state.filter(({ id }) => id !== payload);
const onChangeFilter = (state, { payload }) => payload;

export default {
	fetchContacts,
	onAddContact,
	onRemoveContact,
	onChangeFilter,
};
