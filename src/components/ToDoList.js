import React from 'react';

const ToDoList = ({ todos, onTodoClick, toggleCompletion }) => {
    return (
        <ul style={{ flex: 1, overflowY: 'auto' }}>
            {todos.length === 0 ? (
                <li>
                    <h4>할 일이 없습니다.</h4>
                </li>
            ) : (
                todos.map((todo, index) => (
                    <li key={index}>
                        <span onClick={() => onTodoClick(todo)}>
                            {todo.deadline} {todo.name}
                        </span>
                        <button onClick={() => toggleCompletion(index)}>
                            {todo.isCompleted ? "달성" : "미달성"}
                        </button>
                    </li>
                ))
            )}
        </ul>
    );
};

export default ToDoList;