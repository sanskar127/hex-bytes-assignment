import { Box, Paper, Typography } from '@mui/material'

const ChatContainer = ({ chats }) => {
    return (
        <Box sx={{ borderRadius: '0 0 12px 12px', boxShadow: 3, padding: 2, maxWidth: '100%', height: '60vh', display: 'flex', flexDirection: 'column', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'background.paper' }}>
            <Box sx={{ flex: 1, overflowY: 'auto', padding: 1, display: 'flex', flexDirection: 'column' }}>
                {chats.map((message, idx) => (
                    <Paper key={idx} sx={{ padding: "8px 16px", maxWidth: '70%', marginBottom: 1, alignSelf: message.sender === "user" ? "flex-end" : "flex-start", backgroundColor: message.sender === "user" ? 'primary.main' : 'grey.400', color: 'white', borderRadius: 2 }}>
                        <Typography>{message.text}</Typography>
                    </Paper>
                ))}
            </Box>
        </Box>
    )
}

export default ChatContainer
