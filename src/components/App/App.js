//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
//Components
import Filter from '../Filter';
import Heading from '../Heading';
import Section from '../Section';
import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
//Redux
import { connect } from 'react-redux';
import contactsOperations from 'redux/contacts/contactsOperations';
//Styles
import fadeFilter from 'animation/fadeFilter.module.css';
import fadeHeading from 'animation/fadeHeading.module.css';

class App extends Component {
	static propTypes = {
		onFetchContacts: PropTypes.func.isRequired,
	};

	componentDidMount() {
		this.props.onFetchContacts();
	}

	render() {
		return (
			<Section>
				<CSSTransition
					appear
					in={true}
					timeout={500}
					unmountOnExit
					classNames={fadeHeading}
				>
					<Heading />
				</CSSTransition>

				<ContactForm />

				<CSSTransition
					in={true}
					timeout={250}
					unmountOnExit
					classNames={fadeFilter}
				>
					<Filter />
				</CSSTransition>

				<ContactList />
			</Section>
		);
	}
}

const mapDispatchToProps = {
	onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(null, mapDispatchToProps)(App);
