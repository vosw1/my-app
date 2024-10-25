import React, { useState } from 'react';
import styles from '../styles/Calendar.module.css'; 

const Calendar = ({ selectedDate, onDateChange }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (month, year) => {
        return new Date(year, month, 1).getDay();
    };

    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const renderDaysOfWeek = () => {
        const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
        return (
            <div className={styles.daysOfWeek}>
                {daysOfWeek.map((day, index) => (
                    <div key={index} className={styles.dayOfWeek}>
                        {day}
                    </div>
                ))}
            </div>
        );
    };

    const renderDays = () => {
        const daysInMonth = getDaysInMonth(currentMonth, currentYear);
        const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
        const days = [];

        // 빈 칸 추가
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className={styles.emptyDay}></div>);
        }

        // 날짜 추가
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(
                <div
                    key={day}
                    className={`${styles.day} ${selectedDate.getDate() === day && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? styles.selected : ''}`}
                    onClick={() => onDateChange(new Date(currentYear, currentMonth, day))}
                >
                    {day}
                </div>
            );
        }

        return days;
    };

    return (
        <div className={styles.calendar}>
            <div className={styles.header}>
                <button onClick={handlePrevMonth}>이전</button>
                <h3>{currentYear}년 {currentMonth + 1}월</h3>
                <button onClick={handleNextMonth}>다음</button>
            </div>
            {renderDaysOfWeek()} {/* 요일 표시 */}
            <div className={styles.daysContainer}>
                {renderDays()}
            </div>
        </div>
    );
};

export default Calendar;