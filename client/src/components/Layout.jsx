import { Box, Typography, IconButton, Divider, Grid2 } from '@mui/material';
import { PowerSettingsNew } from '@mui/icons-material';
import { useDispatch } from "react-redux"
import { setAccessToken } from "../features/Auth/authSlice"
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    
    return (
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
            <Grid2 container sx={{ width: "100%", height: "100%" }}>
                <Grid2 size={12}>
                    <Box
                        aria-label='navbar'
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "20px 30px"
                        }}
                    >
                        <Typography variant="h4" color="textPrimary">Header</Typography>
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
                    <Divider />
                </Grid2>

                <Outlet />
            </Grid2>

        </Box>
    );
};

export default Layout;
