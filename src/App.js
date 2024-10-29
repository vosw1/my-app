import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import React, { useState } from 'react'; // useState 추가
import LoginForm from './login/LoginForm';
import Home from './home/Home';
import Header from './components/Header';
import Modal from './components/Modal'; // 모달 컴포넌트 추가

function App() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태 추가

  // 모달을 열고 닫는 함수
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // '/' 경로에서는 Header를 숨기고, '/home' 경로에서는 Header를 표시
  const showHeader = location.pathname === '/home';

  return (
    <>
      {showHeader && <Header openModal={openModal} />} {/* openModal 전달 */}
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      {isModalOpen && <Modal onClose={closeModal} />} {/* 모달 열기 */}
    </>
  );
}

export default App;