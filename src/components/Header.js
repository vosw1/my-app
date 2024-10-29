import React, { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Header = ({ openModal }) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // 1초마다 업데이트

        return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 타이머 정리
    }, []);

    const currentDate = currentTime.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    // 현재 시간을 받아와서 '오후 9시 30분 54초' 형태로 변환
    const hours = currentTime.getHours();
    const minutes = String(currentTime.getMinutes()).padStart(2, '0'); // 두 자리 수로 표시
    const seconds = String(currentTime.getSeconds()).padStart(2, '0'); // 두 자리 수로 표시
    const ampm = hours >= 12 ? '오후' : '오전';
    const formattedHours = hours % 12 || 12; // 12시간 형식으로 변환

    const timeString = `${ampm} ${formattedHours}시 ${minutes}분 ${seconds}초`;

    // 데이터 정의 (여기서 직접 관리)
    const totalTasks = { done: 5, undone: 2 }; // 총 업무 개수
    const personalTasks = { done: 3, undone: 1 }; // 개인 업무 개수

    // 전체 및 개인 달성률 계산
    const totalProgress = totalTasks.done + totalTasks.undone > 0
        ? (totalTasks.done / (totalTasks.done + totalTasks.undone)) * 100
        : 0;

    const personalProgress = personalTasks.done + personalTasks.undone > 0
        ? (personalTasks.done / (personalTasks.done + personalTasks.undone)) * 100
        : 0;

    return (
        <header className={styles.header}>
            <div className={styles['header-left']}>
                <p>{currentDate}</p>
                <p>{timeString}</p>
                <p>날씨: 맑음</p>
            </div>
            <div className={styles['header-center']}>
                <div className={styles['progress-wrapper']}>
                    <div className={styles['progress-section']}>
                        <h4>전체 달성률</h4>
                        <div className={styles['progress-container']}>
                            <div className={styles['progress-item']}>
                                <div className={styles['progress-bar']}>
                                    <CircularProgressbar value={totalProgress} text={`${totalProgress.toFixed(0)}%`} />
                                </div>
                            </div>
                            <div className={styles['progress-text']}>
                                <p>총 {totalTasks.done + totalTasks.undone}건</p>
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
                                    <CircularProgressbar value={personalProgress} text={`${personalProgress.toFixed(0)}%`} />
                                </div>
                            </div>
                            <div className={styles['progress-text']}>
                                <p>총 {personalTasks.done + personalTasks.undone}건</p>
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
                                    <CircularProgressbar value={personalProgress} text={`${personalProgress.toFixed(0)}%`} />
                                </div>
                            </div>
                            <div className={styles['progress-text']}>
                                <p>총 {personalTasks.done + personalTasks.undone}건</p>
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