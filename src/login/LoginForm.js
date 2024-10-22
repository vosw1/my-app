import React, { useState } from 'react';  
import styles from '../styles/LoginForm.module.css';

function LoginForm() { 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleKakaoLogin = () => {
    console.log('Kakao Login');
  };

  const handleNaverLogin = () => {
    console.log('Naver Login');
  };

  return (
    <div className={styles['login-container']}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <input
            type='text'
            placeholder='Id를 입력해주세요'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <input
            type='password'
            placeholder='Password를 입력해주세요'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles['login-btn-container']}>
          <button className='login-btn' type='submit'>Login</button>
          <button className='kakao-login-btn' type='button' onClick={handleKakaoLogin}>
            <img
              src={require('../resources/img/kakao_login_btn.png')}
              alt="Kakao Login"
            />
          </button>
          <button className='naver-login-btn' type='button' onClick={handleNaverLogin}>
            <img
              src={require('../resources/img/naver_login_btn.png')}
              alt="Naver Login"
            />
          </button>
          <button className='join-btn' type='button'>Join</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;