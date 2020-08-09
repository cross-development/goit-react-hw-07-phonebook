//Core
import React from 'react';
//Redux
import { connect } from 'react-redux';
import contactsAction from '../../redux/contacts/contactsAction';
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

const mapStateToProps = ({ contacts }) => ({
	value: contacts.filter,
	contacts: contacts.items,
});

const mapDispatchToProps = {
	onChangeFilter: contactsAction.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
