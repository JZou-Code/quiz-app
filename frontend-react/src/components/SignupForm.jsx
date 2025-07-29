import React, { useState } from 'react';

const SignupForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    onSubmit({ name, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>Name: </label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /> <br />
      <label>Email: </label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> <br />
      <label>Password: </label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /> <br />
      <label>Confirm Password: </label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <div style={{ marginTop: '1rem' }}>
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default SignupForm;
