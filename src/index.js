import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />      {/* App 대신 Main 컴포넌트를 사용 */}
    <Footer />
  </React.StrictMode>
);

reportWebVitals();