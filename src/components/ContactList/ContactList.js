//Core
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
//Redux
import contactsSelectors from 'redux/contacts/contactsSelectors';
//Types
import contactListTypes from './ContactListTypes';
//Components
import ContactListItem from '../ContactListItem';
//Styles
import styles from './ContactList.module.css';
import fadeContactList from 'animation/fadeContactList.module.css';

const ContactList = ({ contacts }) =>
	contacts.length > 0 && (
		<TransitionGroup component="ul" className={styles.list}>
			{contacts.map(({ id }) => (
				<CSSTransition key={id} timeout={250} classNames={fadeContactList}>
					<ContactListItem key={id} id={id} />
				</CSSTransition>
			))}
		</TransitionGroup>
	);

ContactList.propTypes = contactListTypes;

const mapStateToProps = state => ({
	contacts: contactsSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);
