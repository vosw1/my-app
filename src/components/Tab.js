import React, { useState } from 'react';
import styles from '../styles/Tab.module.css';

function Tab({ onClose, onAddTab }) {
  const [tabName, setTabName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tabName) {
      onAddTab(tabName);
      setTabName('');
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h2>업무 추가</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={tabName}
            onChange={(e) => setTabName(e.target.value)}
            placeholder="업무를 입력해주세요"
          />
          <button type="submit">추가</button>
        </form>
      </div>
    </div>
  );
}

export default Tab;