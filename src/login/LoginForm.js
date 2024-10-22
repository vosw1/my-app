import React, { useState } from 'react';  
/* import React from 'react'; React에서 컴포넌트를 작성하고 상태를 관리하기 위해 사용하는 필수적인 기능들을 가져옴 
   { useState } React Hook으로 함수형 컴포넌트에서 상태(state)를 관리하기 위해 사용 
*/
import styles from '../styles/LoginForm.module.css';

function LoginForm() { 
  // 상태를 관리하는 useState 훅
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 폼 제출 처리 함수 추가
  const handleSubmit = (event) => {
    event.preventDefault(); // 기본 폼 제출 동작 방지
    console.log('Username:', username);
    console.log('Password:', password);
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
            onChange={(e) => setUsername(e.target.value)} // ID 입력 값 상태 업데이트
            required
          />
        </div>
        <div className={styles['form-group']}>
          <input
            type='password'
            placeholder='Password를 입력해주세요'
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Password 입력 값 상태 업데이트
            required
          />
        </div>
        <div className={styles['login-btn-container']}>
          <button className='login-btn' type='submit'>Login</button>
          <button className='login-btn, kakao-login-btn' type='button'>Kakao Login</button>
          <button className='login-btn, naver-login-btn' type='button'>Naver Login</button>
        </div>
        <div className={styles['join-btn-container']}>
            <button className='join-btn' type='button'>Join</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;