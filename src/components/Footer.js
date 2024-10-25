import React from 'react';
import styles from '../styles/Footer.module.css'; // CSS 모듈을 위한 경로 설정

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <p>&copy; {new Date().getFullYear()} (주) My Story. All rights reserved.</p>
      <p>대표: 송민경</p>
      <p>소재지: 부산광역시 부산진구 가야대로 772 3층 301호</p>
      <p>문의전화: 051-893-9812</p>
      <p>문의메일: my_story@naver.com</p>
    </footer>
  );
};

export default Footer;