import axios from 'axios';
import { useState } from 'react';

const Login = () => {

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const login = (e) => {
    e.preventDefault();

    const user = {
      username,
      password
    };

    axios.post('/api/user/login-user', user)
    .then(res => {
      console.log(res);
      alert(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <input
          className='form-control'
          onChange={(e) => setUsername(e.target.value)}
          placeholder='username'
          type='text'
          value={username}
        />
        <input
          className='form-control'
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password'
          type='text'
          value={password}
        />
        <input
          className='btn btn-primary'
          type='submit'
          value='login'
        />
      </form>
    </div>
  );
}

export default Login;
