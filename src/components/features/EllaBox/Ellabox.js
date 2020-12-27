import React from 'react';
import styles from './EllaBox.module.scss';
import Attention from '../../common/Attention/Attention';

const EllaBox = () => (
  <div>
    <Attention/>
    <div className={styles.background}>
      <img src="https://i.postimg.cc/90ZF01Ts/frf.png" alt="women in car"/>
    </div>
    <div className='container'>
      <div className={'mb-5 mt-5 d-flex align-items-center justify-content-center ' + styles.invitation}>
          Zapraszamy Panią Elżbietę Garczarek na jazdy doszkalające!
      </div>
    </div>
    <div className={'d-flex align-items-center justify-content-center ' + styles.box}>
      <div className='container'>
            W ofercie 4 godziny prowadzenia auta z instruktorem. <br /> Prosimy o wybranie odpowiedniego możliwego terminu i uzgodnienie tego <br/> z jednym  z naszych konsultantów.
      </div>
    </div>
    <div className={'mt-3 mb-3 d-flex align-items-center justify-content-between container ' + styles.contact}>
      <div className='d-flex col '>
        <img src='https://i.postimg.cc/8Csb3XqR/anna.jpg'/>
        <span>Anna Hernas</span>796 666 870
      </div>
      <div className='d-flex col '>
        <img src='https://i.postimg.cc/c4ZBZLp4/micha.jpg'/>
        <span>Michał Hernas</span> 577 652 787
      </div>
    </div>
  </div>
);

export default EllaBox;
