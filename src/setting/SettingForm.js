import React, { useState, useEffect } from 'react';  
import styles from '../styles/SettingForm.module.css'; 
import formStyles from '../styles/SettingForm.module.css';

function SettingForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [backupMethod, setBackupMethod] = useState('');
  const [backupFrequency, setBackupFrequency] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = {
        email: 'user@example.com',
        password: 'password123',
        birthdate: '1990-01-01',
        phone: '010-1234-5678',
        address: '서울시 강남구 테헤란로',
        backupMethod: 'cloud',
        backupFrequency: 'weekly',
      };

      setEmail(userData.email);
      setPassword(userData.password);
      setBirthdate(userData.birthdate);
      setPhone(userData.phone);
      setAddress(userData.address);
      setBackupMethod(userData.backupMethod);
      setBackupFrequency(userData.backupFrequency);
    };

    fetchUserData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Birthdate:', birthdate);
    console.log('Phone:', phone);
    console.log('Address:', address);
    console.log('Backup Method:', backupMethod);
    console.log('Backup Frequency:', backupFrequency);
  };

  return (
    <div className={styles['settings-container']}>
      <h1>Setting</h1>
      <form onSubmit={handleSubmit}>
        <div className={formStyles['setting-form-group']}>
          <input
            type='email'
            placeholder='아이디(이메일)를 입력해주세요'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={formStyles['setting-form-group']}>
          <input
            type='password'
            placeholder='비밀번호를 입력해주세요'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={formStyles['setting-form-group']}>
          <input
            type='date'
            placeholder='생년월일을 입력해주세요'
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            required
          />
        </div>
        <div className={formStyles['setting-form-group']}>
          <input
            type='tel'
            placeholder='전화번호를 입력해주세요'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className={formStyles['setting-form-group']}>
          <input
            type='text'
            placeholder='주소를 입력해주세요'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className={formStyles['setting-form-group']}>
          <h4>백업 설정</h4>
          <select
            value={backupMethod}
            onChange={(e) => setBackupMethod(e.target.value)}
            required
          >
            <option value="">백업 방법 선택</option>
            <option value="cloud">클라우드 백업</option>
            <option value="local">로컬 백업</option>
          </select>
        </div>
        <div className={formStyles['setting-form-group']}>
          <select
            value={backupFrequency}
            onChange={(e) => setBackupFrequency(e.target.value)}
            required
          >
            <option value="">백업 주기 선택</option>
            <option value="daily">매일</option>
            <option value="weekly">매주</option>
            <option value="monthly">매월</option>
          </select>
        </div>
        <div className={styles['settings-btn-container']}>
          <button className='settings-btn' type='submit'>Save</button>
        </div>
      </form>
    </div>
  );
}

export default SettingForm;