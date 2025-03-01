import { IconButton, FormControl } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { useSendMessageMutation } from '../api/chatApi';
import { useSelector } from 'react-redux';
// import { chatApi } from "../api/chatApi";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const [sendMessage, { isLoading }] = useSendMessageMutation();
  const selectedChat = useSelector(state => state.chat.selectedChat);
  // const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading || !message.trim()) return; // Prevent sending empty messages

    try {
      const response = await sendMessage({
        receiverId: selectedChat._id,
        message,
      });

      console.log(response)

      // if (response) {
      //   dispatch(
      //     chatApi.util.updateQueryData('getMessages', selectedChat, (draft) => {
      //       draft.push(response);  // Add the new message to the list
      //     })
      //   );
      // }
    } catch (e) {
      console.error(e); // log any error
      // Optional: Toast or Snackbar for error feedback
    } finally {
      setMessage(""); // Clear the input field after the attempt
    }
  };

  return (
    <FormControl
      component="form"
      onSubmit={handleSubmit}
      sx={{
        bgcolor: "white",
        border: "1px solid #0000001F",
        borderRadius: "15px",
        display: 'flex',
        flexDirection: "row",
        margin: "20px",
        padding: "0 8px",
        alignItems: 'center',
      }}
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={isLoading}
        placeholder="Type a message..."
        style={{
          border: 'none',
          background: "transparent",
          outline: 'none',
          width: '100%',
        }}
      />

      <IconButton
        type="submit"
        disabled={isLoading || !message.trim()} // Disable when loading or message is empty
        // sx={{
        //   backgroundColor: '#1976d2',
        //   color: '#fff',
        //   '&:hover': {
        //     backgroundColor: '#1565c0',
        //   },
        //   borderRadius: '50%',
        //   transition: 'all 0.3s ease',
        //   width: 40, // Slightly larger button for better accessibility
        //   height: 40,
        // }}
      >
        <SendIcon sx={{ fontSize: '60%' }} />
      </IconButton>
    </FormControl>
  );
};

export default ChatInput;
