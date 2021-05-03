import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types';
import List from '../List/ListContainer.js';
import Search from '../Search/SearchContainer.js';
//import {pageContents, listData} from '../../data/dataStore';    usunięte w 12.3


class App extends React.Component {
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
          <List key={listData.id} {...listData} />
        ))}
        <Search />
      </main>
    );
  }
}

export default App;

/* <List title={['Things to buy', <sup key='1'>soon!</sup>]}> */
/*           <p>I'm planning to buy these things this year</p>
          <image src='http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'></image> */