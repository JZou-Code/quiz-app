// SignupModal.jsx
import React from 'react';
import ReactDom from 'react-dom';
import Backdrop from '../UI/Backdrop/Backdrop';
import useAuth from '../hooks/useAuth';
import SignUpForm from '../components/SignUpForm.jsx';

const SignupPage = () => {
  const { closeSignupModal, login } = useAuth();

  const handleSignup = ({ name }) => {
    login(name); 
  };

  return ReactDom.createPortal(
    <div>
      <Backdrop onClick={closeSignupModal} />
      <div onClick={(e)=>e.stopPropagation()} style={modalStyle}>
        <SignUpForm onSubmit={handleSignup} />
      </div>
    </div>,
    document.body
  );
};

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  padding: '2rem',
  zIndex: 1001,
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
};

export default SignupPage;
