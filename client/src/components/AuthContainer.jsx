import { useState } from 'react';
import { Box, Typography, Tabs, Tab, Alert } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom'; // useNavigate added

const AuthContainer = () => {
  const [activeTab, setActiveTab] = useState(0); // 0 for login, 1 for signup
  const [error, setError] = useState('');
  const navigate = useNavigate(); // hook to change route programmatically

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setError(''); // Clear error when tab switches

    // Navigate to the respective route when tab is changed
    if (newValue === 0) {
      navigate('/login');
    } else {
      navigate('/signup');
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        width: 400,
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '32px',
        boxShadow: 3,
        maxWidth: '100%',
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

        <Outlet />
      </Box>
    </Box>
  );
};

export default AuthContainer;
