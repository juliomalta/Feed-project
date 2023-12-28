import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/ignite-logo.svg';

console.log(React.version); // 17.0.2

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
    </header>
  );
}
