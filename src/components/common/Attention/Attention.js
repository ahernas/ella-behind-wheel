import React from 'react';
import styles from './Attention.module.scss';

const Attention = () => (
  <div className={styles.root}>
    <div className={'mt-5 mb-5 container d-flex align-items-center justify-content-center flex-wrap text-center ' + styles.description}>
      <span> Uwaga! </span>
        Idealny kandydat na kierowcę znaleziony!
    </div>
  </div>
);

export default Attention;
