import React from 'react';
import styles from './TopBar.module.scss';

const TopBar = () => (
  <div className={styles.root}>
    <div className={'container ' + styles.boxTopBar}>
      <div className={styles.logo}>
        <img src='https://i.postimg.cc/KzBLt7yh/logo.png' alt='logo'/>
      </div>
      <div className={'d-md-flex d-none align-items-center ' + styles.list}>
        <ul>
          <li>
            <a href="/">O kursie</a>
          </li>
          <li>
            <a href="/">O nas</a>
          </li>
          <li>
            <a href="/">Cena</a>
          </li>
          <li>
            <a href="/">Opinie</a>
          </li>
          <li>
            <a href="/">Kontakt</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default TopBar;
