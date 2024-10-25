import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './login/LoginForm';
import Home from './home/Home'

function App() {
  return (
    <Router>
      <Routes> 
        <Route path='/' element={<LoginForm />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;