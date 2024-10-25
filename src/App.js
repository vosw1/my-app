import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './login/LoginForm';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path='/' element={<LoginForm />} /> {/* Switch 대신 element 속성 사용 */}
      </Routes>
    </Router>
  );
}

export default App;