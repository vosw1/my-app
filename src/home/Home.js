import React, { useState, useEffect } from 'react';
import Calendar from '../components/Calendar';
import Modal from '../components/Modal';
import Paging from '../components/Paging';
import styles from '../styles/Home.module.css'; 
import TodoList from '../components/ToDoList';

const Home = () => {
    // 상태 변수 정의
    const [totalTodos, setTotalTodos] = useState([]); // 전체 투두 리스트
    const [todayTodos, setTodayTodos] = useState([]); // 오늘의 투두 리스트
    const [currentPageTotal, setCurrentPageTotal] = useState(1); // 전체 투두 페이지 상태
    const [currentPageToday, setCurrentPageToday] = useState(1); // 오늘 투두 페이지 상태
    const [date, setDate] = useState(new Date()); // 선택한 날짜
    const tasksPerPage = 8; // 한 페이지당 할 일 수
    const [selectedDate, setSelectedDate] = useState(new Date()); // 선택된 날짜 상태
    
    // 모달 상태 추가
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열기/닫기 상태
    const [selectedTodo, setSelectedTodo] = useState(null); // 선택된 투두 항목

    // 예시 투두 항목 데이터
    const [tempTodo, setTempTodo] = useState([
        {
            name: '리액트 공부하기',
            assignee: '송민경',
            deadline: '2024-10-27',
            content: '리액트로 간단 웹사이트 만들면서 노션 정리하기',
            memo: '블로깅하기',
            isCompleted: false
        },
        {
            name: '리액트 공부하기',
            assignee: '송민경',
            deadline: '2024-10-28',
            content: '리액트로 간단 웹사이트 만들면서 노션 정리하기',
            memo: '블로깅하기',
            isCompleted: false
        },
        {
            name: '리액트 공부하기',
            assignee: '송민경',
            deadline: '2024-10-28',
            content: '리액트로 간단 웹사이트 만들면서 노션 정리하기',
            memo: '블로깅하기',
            isCompleted: false
        },
        {
            name: '리액트 공부하기',
            assignee: '송민경',
            deadline: '2024-10-28',
            content: '리액트로 간단 웹사이트 만들면서 노션 정리하기',
            memo: '블로깅하기',
            isCompleted: false
        },
        {
            name: '리액트 공부하기',
            assignee: '송민경',
            deadline: '2024-10-28',
            content: '리액트로 간단 웹사이트 만들면서 노션 정리하기',
            memo: '블로깅하기',
            isCompleted: false
        },
        {
            name: '리액트 공부하기',
            assignee: '송민경',
            deadline: '2024-10-28',
            content: '리액트로 간단 웹사이트 만들면서 노션 정리하기',
            memo: '블로깅하기',
            isCompleted: false
        },
        {
            name: '리액트 공부하기',
            assignee: '송민경',
            deadline: '2024-10-29',
            content: '리액트 라이브러리와 자바스크립트 공부하고 노션에 정리하기',
            memo: '블로깅 필수!',
            isCompleted: false
        },
        {
            name: '리액트 공부하기',
            assignee: '송민경',
            deadline: '2024-10-30',
            content: '리액트로 간단 웹사이트 만들면서 노션 정리하기',
            memo: '블로깅하기',
            isCompleted: false
        },
        {
            name: '리액트 공부하기',
            assignee: '송민경',
            deadline: '2024-10-31',
            content: '리액트 라이브러리와 자바스크립트 공부하고 노션에 정리하기',
            memo: '블로깅 필수!',
            isCompleted: false
        },
        {
            name: '리액트 공부하기',
            assignee: '송민경',
            deadline: '2024-11-01',
            content: '리액트로 간단 웹사이트 만들면서 노션 정리하기',
            memo: '블로깅하기',
            isCompleted: false
        }
    ]);

    // 전체 업무 초기화
    useEffect(() => {
        setTotalTodos(tempTodo); 
    }, [tempTodo]);

    // 이벤트 날짜 배열 생성
    const events = totalTodos.map(todo => new Date(todo.deadline));

    // 선택한 날짜에 따른 오늘의 업무 필터링
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

    // 업무 항목 완료/미완료 토글 함수
    const toggleCompletion = (index) => {
        const updatedTodos = totalTodos.map((todo, i) => 
            i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
        );
        setTotalTodos(updatedTodos); 
    };

    // 업무 항목 클릭 시 모달 열기
    const handleTodoClick = (todo) => {
        setSelectedTodo(todo); 
        setIsModalOpen(true); 
    };

    // 모달 닫기
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTodo(null); 
    };

    const paginatedTotalTodos = totalTodos.slice((currentPageTotal - 1) * tasksPerPage, currentPageTotal * tasksPerPage);
    const paginatedTodayTodos = todayTodos.slice((currentPageToday - 1) * tasksPerPage, currentPageToday * tasksPerPage);

     return (
        <div className={styles.body}>
            <div className={styles['body-left']}>
            <h2>전체 업무</h2>
                <TodoList 
                    todos={paginatedTotalTodos} 
                    onTodoClick={handleTodoClick} 
                    toggleCompletion={toggleCompletion} 
                />
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
                <Calendar 
                    selectedDate={selectedDate} 
                    onDateChange={handleDateChange} 
                    events={events} 
                />
            </div>

            {/* 오늘 업무 */}
            <div className={styles['body-right']}>
                <h2>오늘의 업무</h2>
                <ul style={{ flex: 1, overflowY: 'auto' }}> {/* overflow 설정 */}
                    {paginatedTodayTodos.length === 0 ? (
                        <li>
                            <h4>오늘의 할 일이 없습니다.</h4>
                        </li> // 오늘의 업무가 없을 경우 메시지
                    ) : (
                        paginatedTodayTodos.map((todo, index) => (
                            <li key={index}>
                                <span onClick={() => handleTodoClick(todo)}>
                                    {todo.deadline} {todo.name}
                                </span>
                                <button onClick={() => toggleCompletion(index)}>
                                    {todo.isCompleted ? "달성" : "미달성"}
                                </button>
                            </li>
                        ))
                    )}
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
            {isModalOpen && (
                 <Modal
                    todo={selectedTodo} // 선택된 투두 데이터를 전달
                    onClose={closeModal}
                 />
            )}
        </div>
    );
};

export default Home;