import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate('/');
  };
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inp_email: email,
          inp_password: password,
        }),
      });
    
      const data = await response.json();
    
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
    
      if (!data.token) {
        throw new Error('Access token not found in response');
      }
       if(data.token){
        navigate('/home')
       }
      console.log('Login successful, token:', data.token);
      
    } catch (err) {
      console.error('Login error:', err.message);
    }
  }
  return (
    <div className="card">
        <div className="logo-container">
  <img src={require('../assets/logo.png')} alt="logo" width="50" height="50" />
</div> 
      <h2 style={{ color: '#c2185b' }}>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      <button type="submit">Login</button>
      </form>
      <button onClick={handleSignupClick}>Register</button>
    </div>
  );
}

export default Login;