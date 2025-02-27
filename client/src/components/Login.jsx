import { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import { useSigninMutation } from "../api/authApi"
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../features/Auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()
  const [signin] = useSigninMutation()
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Here you can implement the actual login logic
      if (email === '' || password === '') {
        console.log('Please fill in all fields.')
      }

      const data = await signin({ email, passwd: password }).unwrap()

      if (data) {
        dispatch(setAccessToken(data))
        localStorage.setItem("token", JSON.stringify(data.accesstoken))
        navigate("/");
      }
    }
    catch (error) {
      console.log(error)
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ width: '100%' }}>
      <Stack spacing={2}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
          Login
        </Button>
      </Stack>
    </form>
  );
};

export default Login;
