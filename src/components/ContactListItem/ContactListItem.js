//Core
import React from 'react';
import { connect } from 'react-redux';
//Redux
import contactsOperations from 'redux/contacts/contactsOperations';
import contactsSelectors from 'redux/contacts/contactsSelectors';
//Types
import contactListItemTypes from './ContactListItemTypes';
//Styles
import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, number, onRemove }) => (
	<li className={styles.listItem}>
		<p className={styles.contact}>
			<span>{name}:</span> {number}
		</p>
		<button type="button" className={styles.button} onClick={onRemove}>
			&#10006;
		</button>
	</li>
);

ContactListItem.propTypes = contactListItemTypes;

const mapStateToProps = (state, { id }) => ({
	...contactsSelectors.getContactById(state, id),
});

const mapDispatchToProps = (dispatch, { id }) => ({
	onRemove: () => dispatch(contactsOperations.removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
