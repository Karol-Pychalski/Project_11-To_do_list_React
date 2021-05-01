import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import {pageContents, listData} from '../../data/dataStore';



class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>       
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} />
      </main>
    )
  }
}

export default App;

/* <List title={['Things to buy', <sup key='1'>soon!</sup>]}> */
/*           <p>I'm planning to buy these things this year</p>
          <image src='http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'></image> */