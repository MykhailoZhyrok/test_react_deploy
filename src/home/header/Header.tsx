import React from 'react';
import styles from './header.module.css';
import logo from '../../assets/logo.png'

export const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.headerCont}> 
                <img src={logo} alt="logo" className={styles.haedearLogo}/>


                <div className={styles.haederButtons}>


                </div>


                <button className={styles.headerButton}>Join waitlist</button>
        </div>
    </div>
  );
};
