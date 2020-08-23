//Core
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
//Components
import Filter from '../Filter';
import Heading from '../Heading';
import Section from '../Section';
import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
//Redux
import contactsOperations from 'redux/contacts/contactsOperations';
//Types
import appTypes from './AppTypes';
//Styles
import fadeFilter from 'animation/fadeFilter.module.css';
import fadeHeading from 'animation/fadeHeading.module.css';

class App extends Component {
	static propTypes = appTypes;

	componentDidMount() {
		this.props.onFetchContacts();
	}

	render() {
		return (
			<Section>
				<CSSTransition in={true} classNames={fadeHeading} timeout={500} appear unmountOnExit>
					<Heading />
				</CSSTransition>

				<ContactForm />

				<CSSTransition in={true} classNames={fadeFilter} timeout={250} unmountOnExit>
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
