import { useState } from 'react';
import { TextField, Button, Stack, FormControlLabel, Checkbox } from '@mui/material';
import { useSignupMutation } from '../api/authApi';
import { useNavigate } from "react-router-dom"

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState(false);
  const [error, setError] = useState('');

  // const dispatch = useDispatch()
  const [signup] = useSignupMutation();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (email === '' || password === '' || fullname === '') {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const data = await signup({ fullname, email, passwd: password, role }).unwrap();

      if (data) {
        console.log(data);
        navigate("/auth");
      }
    } catch (error) {
      console.log('Signup failed:', error);
      setError('An error occurred while signing up. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSignUp} style={{ width: '100%' }}>
      <Stack spacing={2}>
        {error && <div style={{ color: 'red' }}>{error}</div>}

        <TextField
          label="Full Name"
          type="text"
          fullWidth
          variant="outlined"
          margin="normal"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
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
        <TextField
          label="Confirm Password"
          type="password"
          fullWidth
          variant="outlined"
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={role}
              onChange={(e) => setRole(e.target.checked)}
            />
          }
          label="Administrator"
        />

        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
          Create Account
        </Button>
      </Stack>
    </form>
  );
};

export default SignUp;
