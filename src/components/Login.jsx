import React from 'react';
import './App.css'; // opsional jika kamu ingin styling terpisah

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="school-name">Alexander HighSchool</div>
      <div className="logo-container">
        <img
          src="/logo.png" // pastikan logo disimpan di public/logo.png
          alt="School Logo"
          className="school-logo"
        />
      </div>
      <h1 className="title">SISTEM ABSENSI SEKOLAH</h1>
      <button className="login-button">LOGIN</button>
    </div>
  );
};

export default Login;
