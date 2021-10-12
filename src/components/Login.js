import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();

  const auth = () => {
    if (username === 'Admin' && password === '12345') {
      history.push('/dashboard');
      console.log('auth')
    }
  }

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={auth}>
        <label>
          <p>{username}</p>
          <p>{password}</p>
          <p>Username</p>
          <input type="text" onChange={event => setUserName(event.target.value)} placeholder="Username" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={event => setPassword(event.target.value)} placeholder="Pass" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login;