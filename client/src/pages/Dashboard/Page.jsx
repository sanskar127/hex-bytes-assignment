import { Box, Typography, Container, IconButton, Divider, styled, Paper, Grid2 } from '@mui/material';
import { PowerSettingsNew } from '@mui/icons-material';
import Sidebar from "../../components/Sidebar"
import { useDispatch } from "react-redux"
import { setAccessToken } from "../../features/Auth/authSlice"
import { Outlet, useNavigate } from 'react-router-dom';

const UserDashboard = ({ Placeholder }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

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
                width: "98%",
                height: "88vh",
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: 3,
                maxWidth: '100%',
            }}
        >
            {/* <IconButton
                sx={{
                    backgroundColor: "error.main",
                    color: "white",
                    '&:hover': {
                        backgroundColor: "error.dark",
                        color: "gray"
                    }
                }}
                onClick={() => {
                    dispatch(setAccessToken(null))
                    localStorage.removeItem("token")
                    navigate('/')
                }}
            >
                <PowerSettingsNew />
            </IconButton> */}
            {/* 

            <Divider sx={{ marginY: 4 }} /> */}

            {/* <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper style={{ padding: 20, textAlign: 'center' }}>Column 1</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper style={{ padding: 20, textAlign: 'center' }}>Column 2</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper style={{ padding: 20, textAlign: 'center' }}>Column 3</Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Paper style={{ padding: 20, textAlign: 'center' }}>Column 4</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper style={{ padding: 20, textAlign: 'center' }}>Column 5</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper style={{ padding: 20, textAlign: 'center' }}>Column 6</Paper>
                </Grid>
            </Grid> */}

            <Grid2 container sx={{ width: "100%", height: "100%" }} spacing={2}>
                <Grid2 size={12}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "20px 30px"
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
                            onClick={() => {
                                dispatch(setAccessToken(null))
                                localStorage.removeItem("token")
                                navigate('/')
                            }}
                        >
                            <PowerSettingsNew />
                        </IconButton>
                    </Box>
                </Grid2>

                <Grid2 size={3}>
                    
                </Grid2>

                <Grid2 size="grow">
                    <Paper style={{ padding: 20, textAlign: 'center' }}>Main</Paper>
                </Grid2>
            </Grid2>

            {/* <Outlet /> */}
        </Box>
    );
};

export default UserDashboard;
