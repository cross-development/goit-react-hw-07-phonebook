//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './Section.module.css';

const Section = ({ children }) => (
	<section className={styles.section}>{children}</section>
);

Section.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Section;
