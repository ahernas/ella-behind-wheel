import React from 'react';
import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <div className={styles.title1}>Nauczymy Cię <br /> Jeździć.</div>
      <div className={styles.title2}>Po prostu.</div>
    </div>
  </div>
);

export default Header;
