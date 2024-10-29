import React, { useState, useEffect } from 'react';
import styles from '../styles/Modal.module.css';

const Modal = ({ todo, onClose }) => {
  const [taskName, setTaskName] = useState('');
  const [assignee, setAssignee] = useState('');
  const [deadline, setDeadline] = useState('');
  const [memo, setMemo] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (todo) {
      setTaskName(todo.name);
      setAssignee(todo.assignee);
      setDeadline(todo.deadline);
      setMemo(todo.memo);
      setContent(todo.content);
    }
  }, [todo]);

  const handleSave = () => {
    console.log('To-Do Item Saved', { taskName, assignee, deadline, memo, content });
    onClose(); // 저장 후 모달 닫기
  };

  const handleDelete = () => {
    console.log('To-Do Item Deleted');
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times; {/* X 아이콘 */}
        </button>
        <h2>To-Do List</h2>
        <div className={styles.inputContainer}>
          <div className={styles.inputGroup}>
            <label>업무명</label>
            <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
          </div>
          <div className={styles.inputGroup}>
            <label>담당자</label>
            <input type="text" value={assignee} onChange={(e) => setAssignee(e.target.value)} />
          </div>
          <div className={styles.inputGroup}>
            <label>기한</label>
            <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
          </div>
          <div className={styles.inputGroup}>
            <label>메모</label>
            <input type="text" value={memo} onChange={(e) => setMemo(e.target.value)} />
          </div>
          <div className={styles.inputGroup}>
            <label>내용</label>
            <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={handleSave}>저장</button>
          <button onClick={handleDelete}>삭제</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;