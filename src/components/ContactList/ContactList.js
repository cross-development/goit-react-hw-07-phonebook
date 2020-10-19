//Core
import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
//Components
import ContactListItem from '../ContactListItem';
//Redux
import { connect } from 'react-redux';
import contactsSelectors from 'redux/contacts/contactsSelectors';
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

ContactList.propTypes = {
	contacts: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.number.isRequired,
		}).isRequired,
	).isRequired,
};

const mapStateToProps = state => ({
	contacts: contactsSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);
