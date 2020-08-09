//Core
import React from 'react';
import { CSSTransition } from 'react-transition-group';
//Components
import Filter from '../Filter';
import Heading from '../Heading';
import Section from '../Section';
import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
//Styles
import fadeFilter from '../../animation/fadeFilter.module.css';
import fadeHeading from '../../animation/fadeHeading.module.css';

const App = () => (
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

export default App;
