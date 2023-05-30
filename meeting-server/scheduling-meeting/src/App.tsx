import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Calander from './component/Calander';
import Meetings from './component/Meeting';
import Navbar from './component/Navbar';
import TodayIcon from '@mui/icons-material/Today';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import PaymentSharpIcon from '@mui/icons-material/PaymentSharp';
import VerifiedUserSharpIcon from '@mui/icons-material/VerifiedUserSharp';
import AnalyticsSharpIcon from '@mui/icons-material/AnalyticsSharp';
import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import './component/Meetings.css';
import './App.css';

const SideBar: React.FC = () => {
  const navigate = useNavigate();
  const iconStyle = {
    fontSize: '22px', 
    marginRight: '8px',
  };
  return (
    <aside
      style={{
        width: '170px',
        backgroundColor: '#fff',
        top: '88px',
        bottom: '0',
        position: 'sticky',
        marginTop: '58px',
        marginLeft: '12px',
        fontSize: '13px'
      }}
    >
      <ul style={{ listStyleType: 'none', padding: '0', fontFamily: 'Roboto, sans-serif', fontSize: '14px', color: '#707070' }}>
        <li style={{ padding: '8px', color: '#1371c8', display: 'flex', alignItems: 'center' }}>
          <TodayIcon style={iconStyle} />
          Calander
        </li>
        <li style={{ padding: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center' ,width:"100%"}} onClick={() => navigate('/meetings')}>
          <PeopleAltRoundedIcon style={iconStyle} />
          Client
        </li>
        <li style={{ padding: '8px', display: 'flex', alignItems: 'center',width:"100%" }}>
          <PaymentSharpIcon style={iconStyle} />
          Billing
        </li>
        <li style={{ padding: '8px', display: 'flex', alignItems: 'center',width:"100%" }}>
          <VerifiedUserSharpIcon style={iconStyle} />
          Insurance
        </li>
        <li style={{ padding: '8px', display: 'flex', alignItems: 'center' ,width:"100%"}}>
          <AnalyticsSharpIcon style={iconStyle} />
          Analytics
        </li>
        <li style={{ padding: '9px', width: '100%', display: 'flex', alignItems: 'center' }}>
          <FormatListBulletedSharpIcon style={iconStyle} />
          Account Activity
        </li>
        <li style={{ padding: '8px', display: 'flex', alignItems: 'center' }}>
          <NotificationsSharpIcon style={iconStyle} />
          Reminders
        </li>
        <li style={{ padding: '8px', display: 'flex', alignItems: 'center' }}>
          <SettingsSharpIcon style={iconStyle} />
          Settings
        </li>
      </ul>
    </aside>
  );
};

function App() {
 

  const handleSearch = (value: string) => {
    console.log(`Searching for ${value}`);
  };

  return (
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        <nav
          style={{
            width: "100%",
            backgroundColor: "#0074D9",
            position: "absolute",
            top: "0",
            zIndex: 1,
          }}
        >
          <Navbar onSearch={handleSearch} />
        </nav>
        <SideBar />
        <div
          style={{
            flexGrow: 1,
            padding: "20px",
            marginTop: "60px",
            marginRight: "0",
            marginLeft: "60px",
            width: "100%",
            height: "auto",
            fontSize:" 10x"
          }}
        >
          <Routes>
            <Route path="/" element={<Calander  />} />
            <Route path='/meetings' element={<Meetings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


