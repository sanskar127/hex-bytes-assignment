import { Box, Paper, Typography } from '@mui/material';
import { useGetMessagesQuery } from "../api/chatApi"
import { useSelector } from 'react-redux';
import { setMessages } from "../features/Chat/chatSlice"

const Chats = ({ background }) => {
  const selectedChat = useSelector(state => state.chat.selectedChat)
  const { data: messages = [], isLoading, error } = useGetMessagesQuery(selectedChat?._id, { skip: !selectedChat?._id })

  return (
    <Box sx={{
      flex: 1,
      overflowY: 'auto',
      padding: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center',
    }}>
      {messages.map(message => (
        <Paper key={message._id} sx={{
          padding: "8px 16px",
          maxWidth: '80%',
          marginBottom: 1,
          alignSelf: message.receiverId === selectedChat._id ? "flex-end" : "flex-start",
          backgroundColor: message.receiverId === selectedChat._id ? '#1976d2' : '#b0bec5',
          color: 'white',
          borderRadius: 2,
        }}>
          <Typography>{message.message}</Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default Chats;
