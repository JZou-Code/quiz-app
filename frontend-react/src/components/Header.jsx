import React from 'react';
import useAuth from '../hooks/useAuth';
import {useNavigate} from "react-router-dom";

const Header = () => {
  const { isAuthenticated, user, openLoginModal, logout, openSignupModal } = useAuth();
  const navigete = useNavigate();

  const toTest = ()=>{
      navigete('/quiz/test')
  }

  return (
    <header style={headerStyle}>
      <div style={leftStyle}>
        <a href="#/guidelines" style={linkStyle}>Guidelines & Announcements</a>
      </div>
      <div style={centerStyle}>
        <h1 style={{ margin: 0 }}>Welcome</h1>
      </div>
      <div style={rightStyle}>
        {isAuthenticated ? (
          <span>
            {user.name}
            <button onClick={logout} style={buttonStyle}>Logout</button>
          </span>
        ) : (
          <>
            <button onClick={openLoginModal} style={buttonStyle}>Login</button>
            <button onClick={openSignupModal} style={{ marginLeft: '1rem' }}>Sign up</button>
            <button onClick={toTest} style={{ marginLeft: '1rem' }}>Test</button>
          </>
        )}
      </div>
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  alignItems: 'ccenter',
  justifyContent: 'space-between',
  padding: '1rem 2 rem',
  backgroundColor: '#f5f5f5',
  borderBottom: '1px solid',
  position: 'sticky',
  top: 0,
  zIndex: 100
}

const leftStyle = { flex: 1, textAlign: 'left' };
const centerStyle = { flex: 1, textAlign: 'center' };
const rightStyle = { flex: 1, textAlign: 'right' };

const linkStyle = { textDecoration: 'none', fontweight: 'bold', color: '#333' };
const buttonStyle = { marginLeft: '0.5rem' }

export default Header;