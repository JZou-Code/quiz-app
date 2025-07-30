import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState(''); 
  const {login, openSignupModal} = useAuth(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    login(name);
  }

    return (
      <form onSubmit={handleSubmit} >
        <h2>User Login</h2>
        <div>
            <label>Name: </label>
            <input value={name} onChange={(e)=>setName(e.target.value)} required/>
        </div>
        <div>
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <div style={{marginTop: '1rem'}}>
          <button type='sumbit'>Login</button>
        </div>
        {/*<p>Forgot Password?</p>*/}
        {/*<p style={{marginTop: '1rem'}}>*/}
        {/*  <a href="#" onClick={openSignupModal}>Don't have an account? Sign up</a>*/}
        {/*</p>*/}
      </form>
        
    );
};

export default LoginForm;