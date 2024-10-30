import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import App from './App';
import Nav from './components/Nav'; 

function Main() {
  return (
    <Router>
      <NavWithRouter /> {/* 수정된 부분 */}
      <App />
    </Router>
  );
}

// Nav를 포함한 새로운 컴포넌트
function NavWithRouter() {
  const location = useLocation();
  const showNav = ['/home', '/settingForm'].includes(location.pathname);

  return showNav ? <Nav /> : null; // 조건부로 Nav 렌더링
}

export default Main;