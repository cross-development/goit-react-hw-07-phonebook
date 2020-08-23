//Core
import React from 'react';
import { connect } from 'react-redux';
//Redux
import contactsActions from 'redux/contacts/contactsActions';
import contactsSelectors from 'redux/contacts/contactsSelectors';
//Types
import filterTypes from './FilterTypes';
//Styles
import styles from './Filter.module.css';

const Filter = ({ value, contacts, onChangeFilter }) =>
	contacts.length > 1 && (
		<div className={styles.filterWrapper}>
			<label>
				Find contacts by name
				<input
					className={styles.input}
					type="text"
					autoComplete="off"
					value={value}
					onChange={e => onChangeFilter(e.target.value)}
				/>
			</label>
		</div>
	);

Filter.propTypes = filterTypes;

const mapStateToProps = state => ({
	value: contactsSelectors.getFilter(state),
	contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
	onChangeFilter: contactsActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
