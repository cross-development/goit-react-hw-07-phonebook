const onAddContact = (state, { payload }) => [...state, payload.contact];
const onRemoveContact = (state, { payload }) => state.filter(({ id }) => id !== payload);
const onChangeFilter = (state, { payload }) => payload;

export default {
	onAddContact,
	onRemoveContact,
	onChangeFilter,
};
