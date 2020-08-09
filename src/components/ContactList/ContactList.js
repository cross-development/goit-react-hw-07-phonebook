//Core
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
//Redux
import { connect } from 'react-redux';
import contactsAction from '../../redux/contacts/contactsAction';
//Types
import contactListTypes from './ContactListTypes';
//Components
import ContactListItem from '../ContactListItem';
//Styles
import styles from './ContactList.module.css';
import fadeContactList from '../../animation/fadeContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) =>
	contacts.length > 0 && (
		<TransitionGroup component="ul" className={styles.list}>
			{contacts.map(({ id, name, number }) => (
				<CSSTransition key={id} timeout={250} classNames={fadeContactList}>
					<ContactListItem name={name} number={number} onRemove={() => onRemoveContact(id)} />
				</CSSTransition>
			))}
		</TransitionGroup>
	);

ContactList.propTypes = contactListTypes;

const mapStateToProps = state => {
	const { items, filter } = state.contacts;
	const normalizedFilter = filter.toLowerCase();

	return {
		contacts: items.filter(({ name }) => name.toLowerCase().includes(normalizedFilter)),
	};
};

const mapDispatchToProps = {
	onRemoveContact: contactsAction.removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
