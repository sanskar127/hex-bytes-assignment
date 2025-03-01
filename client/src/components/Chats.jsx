import { Box, Paper, Typography, CircularProgress } from '@mui/material';
import { chatApi, useGetMessagesQuery } from "../api/chatApi";
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from "../features/Chat/chatSlice";
import { useEffect } from 'react';
import { setMessages } from "../features/Chat/chatSlice"

const Chats = ({ background }) => {
  const dispatch = useDispatch();
  const socket = useSelector((state) => state.socket.socket);
  const selectedChat = useSelector(state => state.chat.selectedChat);
  const messages = useSelector(state => state.chat.messages);
  const { data, isLoading, error } = useGetMessagesQuery(selectedChat?._id, { skip: !selectedChat?._id });
  dispatch(setMessages(data))

  useEffect(() => {
    if (socket && selectedChat?._id) {
      socket.on("newMessage", (maal) => {
        // dispatch(
        //   chatApi.util.updateQueryData('getMessages', selectedChat?._id, (draft) => {
        //     draft.push(maal);
        //   })
        // );
        dispatch(setMessages([...messages, maal]))
      });

      return () => socket?.off("newMessage");
    }
  }, [socket, dispatch, selectedChat])

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Typography color="error">Failed to load messages</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{
      flex: 1,
      overflowY: 'auto',
      padding: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundImage: background ? `url(${background})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      {messages?.map((message, index) => {
        // Add a safety check to ensure message is defined and has the necessary properties
        if (!message || !message.receiverId || !message._id || !message.message) {
          console.warn('Invalid message:', message);
          return null; // Skip rendering invalid messages
        }

        return (
          <Paper key={message._id || index} sx={{
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
        );
      })}
    </Box>
  );
};

export default Chats;
