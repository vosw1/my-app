import React, { useState } from 'react';
import styles from '../styles/Calendar.module.css'; 

const Calendar = ({ selectedDate, onDateChange, events }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    // 한국 공휴일 배열 (2024년 기준)
    const holidays = [
        new Date(currentYear, 0, 1),   // 신정 (1월 1일)
        new Date(currentYear, 0, 10),  // 설날 (음력 1월 1일, 2024년 기준)
        new Date(currentYear, 2, 1),    // 삼일절 (3월 1일)
        new Date(currentYear, 4, 1),    // 근로자의 날 (5월 1일)
        new Date(currentYear, 4, 5),    // 어린이날 (5월 5일)
        new Date(currentYear, 4, 15),   // 석가탄신일 (음력 4월 8일, 2024년 기준)
        new Date(currentYear, 5, 6),    // 현충일 (6월 6일)
        new Date(currentYear, 7, 15),   // 광복절 (8월 15일)
        new Date(currentYear, 8, 15),   // 추석 (음력 8월 15일, 2024년 기준)
        new Date(currentYear, 9, 3),    // 개천절 (10월 3일)
        new Date(currentYear, 9, 9),    // 한글날 (10월 9일)
        new Date(currentYear, 11, 25)   // 크리스마스 (12월 25일)
    ];

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
            const isEventDay = events.some(event => 
                event.getDate() === day && 
                event.getMonth() === currentMonth && 
                event.getFullYear() === currentYear
            );
            const isHoliday = holidays.some(holiday => 
                holiday.getDate() === day && 
                holiday.getMonth() === currentMonth && 
                holiday.getFullYear() === currentYear
            );

            days.push(
                <div
                    key={day}
                    className={`${styles.day} 
                        ${selectedDate.getDate() === day && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? styles.selected : ''} 
                        ${isEventDay ? styles.eventDay : ''} 
                        ${isHoliday ? styles.holiday : ''}`} 
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
                <button onClick={handlePrevMonth}>{currentMonth === 0 ? 12 : currentMonth}월</button>
                <h3>{currentYear}년 {currentMonth + 1}월</h3>
                <button onClick={handleNextMonth}>{currentMonth === 11 ? 1 : currentMonth + 2}월</button>
            </div>
            <div className={styles.body}>
                {renderDaysOfWeek()} 
                <div className={styles.daysContainer}>
                    {renderDays()}
                </div>
            </div>
        </div>
    );
};

export default Calendar;