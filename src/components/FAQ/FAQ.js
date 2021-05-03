import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import {FAQContents} from '../../data/dataStore';
import styles from './FAQ.scss';

const FAQ = () => (
  <Container>
    <Hero titleText={FAQContents.title} imagePicture={FAQContents.image}/>
    <p className={styles.description}>{FAQContents.description}</p>
  </Container>
);

FAQ.propTypes = {
  title: PropTypes.node,
  image: PropTypes.node,
  description: PropTypes.node,
};

export default FAQ;