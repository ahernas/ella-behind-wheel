import React from 'react';
//import styles from './Homepage.module.scss';

import TopBar from '../../layout/TopBar/TopBar';
import EllaBox from '../../features/EllaBox/Ellabox';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';


const HomePage = () => (
  <div>
    <TopBar/>
    <Header/>
    <EllaBox/>
    <Footer/>
  </div>
);

export default HomePage;
