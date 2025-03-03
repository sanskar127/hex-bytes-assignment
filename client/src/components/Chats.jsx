// import { useEffect } from 'react';
import { useGetMessagesQuery } from "../api/chatApi";
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from "../features/Chat/chatSlice";
import { Box, Paper, Typography, CircularProgress } from '@mui/material';
import { useEffect } from "react";

const Chats = () => {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.chat.messages);
  const selectedChat = useSelector(state => state.chat.selectedChat);
  const { data: data = [], isLoading, error } = useGetMessagesQuery(selectedChat?._id, { skip: !selectedChat?._id });

  // useEffect(() => {
  //   if (data) {
  //     dispatch(setMessages(data))
  //   }
  // }, [data, dispatch])

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
