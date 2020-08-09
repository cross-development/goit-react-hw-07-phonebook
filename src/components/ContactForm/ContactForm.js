//Core
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
//Redux
import { connect } from 'react-redux';
import contactsAction from '../../redux/contacts/contactsAction';
//Types
import contactFormTypes from './ContactFormTypes';
//Components
import Notification from '../Notification';
//Styles
import styles from './ContactForm.module.css';
import fadeNotification from '../../animation/fadeNotification.module.css';

export class ContactForm extends Component {
	static propTypes = contactFormTypes;

	state = {
		name: '',
		number: '',
		isNotice: false,
	};

	setNotificationTimeout = delay => setTimeout(() => this.setState({ isNotice: false }), delay);

	handleChange = e => this.setState({ [e.target.name]: e.target.value });

	handleFormSubmit = e => {
		e.preventDefault();

		const isContactExists = this.props.contacts.find(
			({ name }) => name.toLowerCase() === this.state.name.toLowerCase(),
		);

		if (isContactExists) {
			this.setState({ name: '', number: '', isNotice: true });
			return this.setNotificationTimeout(2000);
		}

		this.props.onAddContact(this.state.name, this.state.number);
		this.setState({ name: '', number: '' });
	};

	render() {
		const { name, number, isNotice } = this.state;

		return (
			<>
				<CSSTransition in={isNotice} classNames={fadeNotification} timeout={250} unmountOnExit>
					<Notification />
				</CSSTransition>

				<form className={styles.form} onSubmit={this.handleFormSubmit}>
					<label>
						Name
						<input
							className={styles.input}
							autoFocus
							type="text"
							name="name"
							autoComplete="off"
							value={name}
							onChange={this.handleChange}
						/>
					</label>

					<label>
						Number
						<input
							className={styles.input}
							type="text"
							name="number"
							autoComplete="off"
							value={number}
							onChange={this.handleChange}
						/>
					</label>

					<button className={styles.button} type="submit">
						Add contact
					</button>
				</form>
			</>
		);
	}
}

const mapStateToProps = state => ({
	contacts: state.contacts.items,
});

const mapDispatchToProps = {
	onAddContact: contactsAction.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
