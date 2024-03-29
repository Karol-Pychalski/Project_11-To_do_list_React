import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
import ListLink from '../ListLink/ListLink.js';
//import {pageContents, listData} from '../../data/dataStore';    usunięte w 12.3


class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }

  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {lists.map(listData => (
          <ListLink key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

export default Home;

/* <List title={['Things to buy', <sup key='1'>soon!</sup>]}> */
/*           <p>I'm planning to buy these things this year</p>
          <image src='http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'></image> */