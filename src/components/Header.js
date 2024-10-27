import React from 'react';
import styles from '../styles/Header.module.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; 

const Header = ({ openModal }) => {
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    const totalProgress = 0;
    const personalProgress = 0;
    const totalTasks = { done: 0, undone: 0 };
    const personalTasks = { done: 0, undone: 0 };

    return (
        <header className={styles.header}>
            <div className={styles['header-left']}>
                <p>{currentDate}</p>
                <p>{currentTime}</p>
                <p>날씨: 맑음</p>
            </div>
            <div className={styles['header-center']}>
                <div className={styles['progress-wrapper']}>
                    <div className={styles['progress-section']}>
                        <h4>전체 달성률</h4>
                        <div className={styles['progress-container']}>
                            <div className={styles['progress-item']}>
                                <div className={styles['progress-bar']}>
                                    <CircularProgressbar value={totalProgress} text={`${totalProgress}%`} />
                                </div>
                            </div>
                            <div className={styles['progress-text']}>
                                <p>총 {totalTasks.done}건</p>
                                <p>달성 {totalTasks.done}건</p>
                                <p>미달성 {totalTasks.undone}건</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles['progress-section']}>
                        <h4>팀 달성률</h4>
                        <div className={styles['progress-container']}>
                            <div className={styles['progress-item']}>
                                <div className={styles['progress-bar']}>
                                    <CircularProgressbar value={personalProgress} text={`${personalProgress}%`} />
                                </div>
                            </div>
                            <div className={styles['progress-text']}>
                                <p>총 {personalTasks.done}건</p>
                                <p>달성 {personalTasks.done}건</p>
                                <p>미달성 {personalTasks.undone}건</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles['progress-section']}>
                        <h4>오늘 달성률</h4>
                        <div className={styles['progress-container']}>
                            <div className={styles['progress-item']}>
                                <div className={styles['progress-bar']}>
                                    <CircularProgressbar value={personalProgress} text={`${personalProgress}%`} />
                                </div>
                            </div>
                            <div className={styles['progress-text']}>
                                <p>총 {personalTasks.done}건</p>
                                <p>달성 {personalTasks.done}건</p>
                                <p>미달성 {personalTasks.undone}건</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['header-right']}>
                <button onClick={openModal}>To-Do List 추가</button>
            </div>
        </header>
    );
};

export default Header;