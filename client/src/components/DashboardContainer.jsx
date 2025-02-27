import { Box, Typography, Container, IconButton, Divider } from '@mui/material';
import { PowerSettingsNew } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const UserDashboard = ({ children, Placeholder }) => {
    const navigate = useNavigate();

    return (
        // <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        //   <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2, backgroundColor: '#1976d2' }}>
        //     <Typography variant="h6" color="white">
        //       Hi, {currentUser}
        //     </Typography>
        //     <Button variant="contained" color="secondary" onClick={handleLogout} endIcon={<ExitToApp />}>
        //       Logout
        //     </Button>
        //   </Box>

        //   <Box sx={{ flexGrow: 1, padding: 3, display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        //     <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 calc(25% - 1rem)' }}>
        //       <CardContent sx={{ textAlign: 'center' }}>
        //         <Schedule sx={{ fontSize: 40, color: 'primary.main' }} />
        //         <Typography variant="h6">Book Appointment</Typography>
        //       </CardContent>
        //     </Card>

        //     <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 calc(25% - 1rem)' }}>
        //       <CardContent sx={{ textAlign: 'center' }}>
        //         <Schedule sx={{ fontSize: 40, color: 'primary.main' }} />
        //         <Typography variant="h6">My Appointments</Typography>
        //       </CardContent>
        //     </Card>

        //     <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 calc(25% - 1rem)' }}>
        //       <CardContent sx={{ textAlign: 'center' }}>
        //         <Payment sx={{ fontSize: 40, color: 'primary.main' }} />
        //         <Typography variant="h6">Payment & Receipts</Typography>
        //       </CardContent>
        //     </Card>

        //     <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 calc(25% - 1rem)' }}>
        //       <CardContent sx={{ textAlign: 'center' }}>
        //         <Chat sx={{ fontSize: 40, color: 'primary.main' }} />
        //         <Typography variant="h6">Chat with Support</Typography>
        //       </CardContent>
        //     </Card>
        //   </Box>
        // </Box>
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
                width: "60%",
                height: "58vh",
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '40px',
                boxShadow: 3, // Light shadow for the form container
                maxWidth: '100%',
            }}
        >
            <Container
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: "26px",
                    borderBottom: "2px solid silver"
                }}
            >
                <Typography variant="h4" color="textPrimary">{Placeholder}</Typography>
                <IconButton
                    sx={{
                        backgroundColor: "error.main",
                        color: "white",
                        '&:hover': {
                            backgroundColor: "error.dark",
                            color: "gray"
                        }
                    }}
                    onClick={() => navigate('/')}
                >
                    <PowerSettingsNew />
                </IconButton>
            </Container>

            <Divider sx={{ marginY: 4 }} />

            {children}
        </Box>
    );
};

export default UserDashboard;
