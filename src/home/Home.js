import React, { useState, useEffect } from 'react';
import Calendar from '../components/Calendar';
import Modal from '../components/Modal';
import Paging from '../components/Paging';
import styles from '../styles/Home.module.css'; 

const Home = () => {
    // 상태 변수 정의
    const [totalTodos, setTotalTodos] = useState([]); // 전체 투두 리스트
    const [todayTodos, setTodayTodos] = useState([]); // 오늘의 투두 리스트
    const [currentPageTotal, setCurrentPageTotal] = useState(1); // 전체 투두 페이지 상태
    const [currentPageToday, setCurrentPageToday] = useState(1); // 오늘 투두 페이지 상태
    const [date, setDate] = useState(new Date()); // 선택한 날짜
    const tasksPerPage = 5; // 한 페이지당 할 일 수
    const [selectedDate, setSelectedDate] = useState(new Date()); // 선택된 날짜 상태
    
    // 모달 상태 추가
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열기/닫기 상태
    const [selectedTodo, setSelectedTodo] = useState(null); // 선택된 투두 항목

    // 예시 투두 항목 데이터
    const [tempTodo, setTempTodo] = useState([
        {
            name: '리액트 공부하기',
            assignee: '송민경',
            deadline: '2024-10-12',
            content: '리액트로 간단 웹사이트 만들면서 노션 정리하기',
            memo: '블로깅하기',
            isCompleted: false
        },
        {
            name: '리액트 공부하기',
            assignee: '송민경',
            deadline: '2024-10-15',
            content: '리액트로 간단 웹사이트 만들면서 노션 정리하기',
            memo: '블로깅하기',
            isCompleted: false
        },
        {
            name: '리액트 공부하기',
            assignee: '박선규',
            deadline: '2024-10-16',
            content: '리액트 라이브러리와 자바스크립트 공부하고 노션에 정리하기',
            memo: '블로깅 필수!',
            isCompleted: false
        }
    ]);

    // 전체 투두 리스트 초기화
    useEffect(() => {
        setTotalTodos(tempTodo); 
    }, [tempTodo]);

    // 선택한 날짜에 따른 오늘의 투두 리스트 필터링
    useEffect(() => {
        const filteredTodayTodos = totalTodos.filter(todo => { 
            const todoDate = new Date(todo.deadline);
            return todoDate.toDateString() === date.toDateString();
        });
        setTodayTodos(filteredTodayTodos); 
        setCurrentPageToday(1); // 오늘 리스트를 업데이트할 때 페이지를 1로 리셋
    }, [date, totalTodos]); 

    // 날짜 변경 처리 함수
    const handleDateChange = (newDate) => {
        setDate(newDate);
        console.log(newDate);
    };

    // 투두 항목 완료/미완료 토글 함수
    const toggleCompletion = (index) => {
        const updatedTodos = totalTodos.map((todo, i) => 
            i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
        );
        setTotalTodos(updatedTodos); 
    };

    // 투두 항목 클릭 시 모달 열기
    const handleTodoClick = (todo) => {
        setSelectedTodo(todo); 
        setIsModalOpen(true); 
    };

    // 모달 닫기
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTodo(null); 
    };

    return (
        <div className={styles.body}>
            <div className={styles['body-left']}>
                <h2>전체 투두 리스트</h2>
                <ul>
                    {totalTodos.map((todo, index) => ( 
                        <li key={index}>
                            <span onClick={() => handleTodoClick(todo)}> 
                                {todo.deadline} {todo.name}
                            </span>
                            <button onClick={() => toggleCompletion(index)}>
                                {todo.isCompleted ? "달성" : "미달성"} 
                            </button>
                        </li>
                    ))}
                </ul>
                {/* 페이지네이션 컴포넌트 */}
                <div className={styles.Paging}>
                    <Paging
                        currentPage={currentPageTotal}
                        totalPages={Math.ceil(totalTodos.length / tasksPerPage)}
                        onPageChange={setCurrentPageTotal}
                    />
                </div>
            </div>

            {/* 캘린더 컴포넌트 */}
            <div className={styles['body-center']}>
                <Calendar selectedDate={selectedDate} onDateChange={handleDateChange} />
            </div>

            <div className={styles['body-right']}>
                <h2>당일 투두 리스트</h2>
                <ul>
                    {todayTodos.map((todo, index) => (
                        <li key={index}>
                            <span onClick={() => handleTodoClick(todo)}> 
                                {todo.deadline} {todo.name} 
                            </span>
                            <button onClick={() => toggleCompletion(index)}>
                                {todo.isCompleted ? "달성" : "미달성"} 
                            </button>
                        </li>
                    ))}
                </ul>
                {/* 페이지네이션 컴포넌트 */}
                <div className={styles.Paging}>
                    <Paging
                        currentPage={currentPageToday}
                        totalPages={Math.ceil(todayTodos.length / tasksPerPage)} 
                        onPageChange={setCurrentPageToday}
                    />
                </div>
            </div>

            {/* 모달 컴포넌트 */}
            {isModalOpen && <Modal todo={selectedTodo} onClose={closeModal} />} 
        </div>
    );
};

export default Home;