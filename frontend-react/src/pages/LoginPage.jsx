import React from 'react';
import ReactDom from 'react-dom';
import Backdrop from '../UI/Backdrop/Backdrop';
import LoginForm from '../components/LoginForm';
import classes from '../style/Login.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

const LoginPage = ({onClose}) => {
  return ReactDom.createPortal(
          <Backdrop onClick = {onClose}>
          <div onClick={(e)=>e.stopPropagation()} style={modalStyle}>
              <div onClick={onClose} className='dismiss'>
                  <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
              </div>
            <LoginForm onClose={onClose}/>
          </div>
          </Backdrop>,
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
boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
}

export default LoginPage;