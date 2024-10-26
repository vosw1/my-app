import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LoginForm from './login/LoginForm';
import Home from './home/Home';
import Header from './components/Header';

function App() {
  const location = useLocation();
  
  // '/' 경로에서는 Header를 숨기고, '/home' 경로에서는 Header를 표시
  const showHeader = location.pathname === '/home';

  return (
    <>
      {showHeader && <Header />}
      <Routes> 
        <Route path='/' element={<LoginForm />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  );
}

function Main() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Main;