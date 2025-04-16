import React, { useState } from 'react';
import logo from "../public/logo.png";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveMenu('dashboard'); // reset menu saat logout
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return <MainLayout onLogout={handleLogout} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />;
}
    {/* Topbar */}
    <div className="topbar">
      <div className="welcome">Selamat Datang Admin</div>
    </div>

function Login({ onLogin }) {
  return (
    <div style={styles.centeredContainer}>
    <div className="container"></div>
    <div className="header">Alexander HighSchool</div>
      <img src={"logo.png"} alt="logo" className="logo" />
      <h1 className="title">SISTEM ABSENSI SEKOLAH</h1>
      <button className="login-btn" onClick={onLogin}>LOGIN</button>
     </div>
  );
}

// function Login({ onLogin }) {
//   return (
    // <div className="container">
    //   <div className="header">Alexander HighSchool</div>
    //   <img src={logo} alt="c:\Users\ASUS\Downloads\logosklh.png" className="logo" />
    //   <h1 className="title">SISTEM ABSENSI SEKOLAH</h1>
    //   <button className="login-btn" onClick={onLogin}>LOGIN</button>
    // </div>
//   );
// }


function MainLayout({ onLogout, activeMenu, setActiveMenu }) {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Attendity</h2>
        <button style={styles.menuButton} onClick={() => setActiveMenu('dashboard')}>Dashboard</button>
        <button style={styles.menuButton} onClick={() => setActiveMenu('absensi')}>Absensi</button>
        <button style={styles.menuButton} onClick={() => setActiveMenu('password')}>Ganti Password</button>
        <button style={styles.logoutButton} onClick={onLogout}>Logout</button>
      </div>

      <div style={styles.content}>
        {activeMenu === 'dashboard' && <Dashboard />}
        {activeMenu === 'absensi' && <Absensi />}
        {activeMenu === 'password' && <GantiPassword />}
      </div>
    </div>
  );
}

function Dashboard() {
  // return <h1>Selamat Datang Admin</h1>;
  return (
    <div className="container">


    {/* Main content */}
    <div className="main-content">
      {/* Statistik cards */}
      <div className="card-row">
        <div className="card">
          <p><b>0 Siswa</b></p>
          <p>Jumlah Siswa</p>
        </div>
        <div className="card red">
          <p><b>0 Siswa</b></p>
          <p>Jumlah Siswa Yang Tidak Hadir</p>
        </div>
        <div className="card green">
          <p><b>0 Siswa</b></p>
          <p>Jumlah Siswa Yang Hadir</p>
        </div>
      </div>

      {/* Kelas dan Informasi */}
      <div className="card-row">
        <div className="big-card">
          <h3>Siswa Perkelas T.A 2023/2024</h3>
          <p>Kelas</p>
        </div>
        <div className="info-card">
          <h4>ℹ Informasi</h4>
        </div>
      </div>

      {/* Aktivitas Terakhir */}
      <div className="bottom-card">
        <div>
          <b>Aktivitas Terakhir</b><br />
          Tampilkan
        </div>
        <div className="search">Pencarian :</div>
      </div>
    </div>
  </div>
  );
}

function Absensi() {
  return (
    <div>
      <h2>Absensi</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Tanggal</th>
            <th>Waktu Masuk</th>
            <th>Waktu Pulang</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Rezky Annisa</td>
            <td>05-03-2025</td>
            <td>07.00</td>
            <td>16.00</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Liona</td>
            <td>05-03-2025</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function GantiPassword() {
  return (
    <div>
      <h2>Ganti Password</h2>
      <p>Fitur ganti password belum tersedia.</p>
    </div>
  );
}

// Style
const styles = {
  centeredContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f2f2f2',
  },
  loginBox: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    textAlign: 'center',
    width: '300px',
  },
  title: {
    fontSize: '20px',
    marginBottom: '20px',
  },
  loginButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  sidebar: {
    width: '200px',
    backgroundColor: '#e0e0e0',
    padding: '20px',
  },
  sidebarTitle: {
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  menuButton: {
    width: '100%',
    padding: '10px',
    margin: '5px 0',
    backgroundColor: '#ccc',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
  },
  logoutButton: {
    width: '100%',
    padding: '10px',
    marginTop: '20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  content: {
    flex: 1,
    padding: '40px',
    backgroundColor: '#f9f9f9',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  tableHeader: {
    backgroundColor: '#f1f1f1',
  },
  th: {
    border: '1px solid #ddd',
    padding: '8px',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
  },
};

export default App;
