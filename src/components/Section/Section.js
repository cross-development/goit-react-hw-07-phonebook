//Core
import React from 'react';
//Types
import sectionTypes from './SectionTypes';
//Styles
import styles from './Section.module.css';

const Section = ({ children }) => <section className={styles.section}>{children}</section>;

Section.propTypes = sectionTypes;

export default Section;
