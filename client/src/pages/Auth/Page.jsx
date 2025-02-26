import { useState } from 'react';
import { Box, TextField, Button, Typography, Stack, Tabs, Tab, Alert } from '@mui/material';

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState(0); // 0 for login, 1 for signup
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setError(''); // Clear error when tab switches
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logged in with', email, password);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    console.log('Signed up with', email, password);
  };

  return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          width: 400, // Fixed width for the box
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '32px',
          boxShadow: 3, // Light shadow for the form container
          maxWidth: '100%', // Ensure it's responsive on very large screens
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          {activeTab === 0 ? 'Log into Your Account' : 'Create an Account'}
        </Typography>

        <Box sx={{ width: '100%' }}>
          {/* Tab Slider for switching */}
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            sx={{
              mb: 2,
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 'bold',
              },
              '& .MuiTabs-flexContainer': {
                justifyContent: 'center',
              },
            }}
          >
            <Tab label="Login" />
            <Tab label="Sign Up" />
          </Tabs>

          {/* Error handling */}
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {/* Form for Login */}
          {activeTab === 0 ? (
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
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': { borderColor: 'primary.main' },
                    },
                  }}
                />
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': { borderColor: 'primary.main' },
                    },
                  }}
                />
                <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
                  Login
                </Button>
              </Stack>
            </form>
          ) : (
            // Form for Sign Up
            <form onSubmit={handleSignUp} style={{ width: '100%' }}>
              <Stack spacing={2}>
                <TextField
                  label="Full Name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': { borderColor: 'primary.main' },
                    },
                  }}
                />
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': { borderColor: 'primary.main' },
                    },
                  }}
                />
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': { borderColor: 'primary.main' },
                    },
                  }}
                />
                <TextField
                  label="Confirm Password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': { borderColor: 'primary.main' },
                    },
                  }}
                />
                <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
                  Create Account
                </Button>
              </Stack>
            </form>
          )}
        </Box>
      </Box>
  );
};

export default AuthPage;
