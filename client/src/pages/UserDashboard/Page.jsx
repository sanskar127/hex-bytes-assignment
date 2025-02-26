import { Button, Card, CardContent, Box, Typography } from '@mui/material';
import { ExitToApp, Schedule, Payment, Chat } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const UserDashboard = ({ currentUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2, backgroundColor: '#1976d2' }}>
        <Typography variant="h6" color="white">
          Hi, {currentUser}
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleLogout} endIcon={<ExitToApp />}>
          Logout
        </Button>
      </Box>

      <Box sx={{ flexGrow: 1, padding: 3, display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 calc(25% - 1rem)' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Schedule sx={{ fontSize: 40, color: 'primary.main' }} />
            <Typography variant="h6">Book Appointment</Typography>
          </CardContent>
        </Card>

        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 calc(25% - 1rem)' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Schedule sx={{ fontSize: 40, color: 'primary.main' }} />
            <Typography variant="h6">My Appointments</Typography>
          </CardContent>
        </Card>

        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 calc(25% - 1rem)' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Payment sx={{ fontSize: 40, color: 'primary.main' }} />
            <Typography variant="h6">Payment & Receipts</Typography>
          </CardContent>
        </Card>

        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 calc(25% - 1rem)' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Chat sx={{ fontSize: 40, color: 'primary.main' }} />
            <Typography variant="h6">Chat with Support</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default UserDashboard;
