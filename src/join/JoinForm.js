import React, { useState } from 'react';  
import styles from '../styles/JoinForm.module.css';

function JoinForm() { 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Nickname:', nickname);
    console.log('Birthdate:', birthdate);
    console.log('Phone:', phone);
    console.log('Address:', address);
  };

  return (
    <div className={styles['join-container']}>
      <h1>Join</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <input
            type='text'
            placeholder='이름을 입력해주세요'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <input
            type='email'
            placeholder='아이디(이메일)를 입력해주세요'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <input
            type='password'
            placeholder='비밀번호를 입력해주세요'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <input
            type='text'
            placeholder='닉네임을 입력해주세요'
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <input
            type='date'
            placeholder='생년월일을 입력해주세요'
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <input
            type='tel'
            placeholder='전화번호를 입력해주세요'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <input
            type='text'
            placeholder='주소를 입력해주세요'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className={styles['join-btn-container']}>
          <button className='join-btn' type='submit'>Join</button>
        </div>
      </form>
    </div>
  );
}

export default JoinForm;