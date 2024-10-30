import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Nav.module.css';

function Nav() {
  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>MyStory</span>
      <span className={styles.tabs}>
        <Link to="/home" className={styles.tab}>업무 1</Link>
        <Link to="/home" className={styles.tab}>업무 2</Link>
        <button className={styles.tab}>+</button>
      </span>
      <span className={styles.actions}>
        <Link to="/settingForm"><button>설정</button></Link>
        <Link to="/"><button>로그아웃</button></Link>
      </span>
    </div>
  );
}

export default Nav;