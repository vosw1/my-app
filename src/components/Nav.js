import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Nav.module.css';
import Tab from './Tab';

function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tabs, setTabs] = useState(['업무 1', '업무 2']);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addTab = (tabName) => {
    setTabs([...tabs, tabName]); // 새 탭 추가
  };

  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>MyStory</span>
      <span className={styles.tabs}>
        {tabs.map((tab, index) => (
          <Link to="/home" key={index} className={styles.tab}>{tab}</Link>
        ))}
        <button className={styles.tab} onClick={openModal}>+</button>
      </span>
      <span className={styles.actions}>
        <Link to="/settingForm"><button>설정</button></Link>
        <Link to="/"><button>로그아웃</button></Link>
      </span>
      {isModalOpen && <Tab onClose={closeModal} onAddTab={addTab} />} {/* Tab 모달 표시 */}
    </div>
  );
}

export default Nav;