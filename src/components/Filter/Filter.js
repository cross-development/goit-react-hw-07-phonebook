//Core
import React from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import contactsActions from 'redux/contacts/contactsActions';
import contactsSelectors from 'redux/contacts/contactsSelectors';
//Styles
import styles from './Filter.module.css';

const Filter = ({ value, contacts, onChangeFilter }) =>
	contacts.length > 1 && (
		<div className={styles.filterWrapper}>
			<label>
				Find contacts by name
				<input
					type="text"
					value={value}
					autoComplete="off"
					className={styles.input}
					onChange={e => onChangeFilter(e.target.value)}
				/>
			</label>
		</div>
	);

Filter.propTypes = {
	value: PropTypes.string.isRequired,
	onChangeFilter: PropTypes.func.isRequired,
	contacts: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.number.isRequired,
		}).isRequired,
	).isRequired,
};

const mapStateToProps = state => ({
	value: contactsSelectors.getFilter(state),
	contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
	onChangeFilter: contactsActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
