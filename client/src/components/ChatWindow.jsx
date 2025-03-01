import { Box, Button, Container, Typography, IconButton, Paper, TextField, FormControl } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import ChatBackground from "../assets/chat_background.jpg";
import Chats from "./Chats"
import ChatInput from "./ChatInput"
import { useDispatch } from 'react-redux';
import { setSelectedChat } from "../features/Chat/chatSlice"

const ChatWindow = () => {
  const [minimize, setMinimize] = useState(true);
  const [exit, setExit] = useState(true); // State to control chat window exit
  const [formChat, setFormChat] = useState([{ sender: "bot", text: "Hi, I am Bhaskar Anna! Can I ask your issue?" }]);
  const [supportForm, setSupportForm] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch()


  useEffect(() => { dispatch(setSelectedChat({ _id: "67c0515143eb0bcb5f79e36f" })) }, [dispatch])

  const prompts = [
    "Please tell me your Full Name?",
    "Your Email?",
    "Explain Your Problem in detail",
    "Okay gotcha! I am sharing your issue with our Support Team. Please wait here, someone will be available to help you! Thanks for your time."
  ];

  const promptKeys = ["subject", "name", "email", "desc"];

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (messageText.trim()) {
      const updatedChat = [...formChat, { sender: "user", text: messageText }];
      setFormChat(updatedChat);
      setSupportForm(prev => [...prev, { [promptKeys[index]]: messageText }]);

      setMessageText("");
      setIsLoading(true);

      setTimeout(() => {
        if (index < prompts.length) {
          setFormChat(prev => [...prev, { sender: "bot", text: prompts[index] }]);
          setIndex(prev => prev + 1);
        }
        setIsLoading(false);
      }, 1000);

      console.log(supportForm);
    }
  };

  return (
    <Container sx={{ display: exit ? 'block' : 'none', position: 'fixed', bottom: 0, right: '5%', width: '30%', zIndex: 99 }}>
      <Button
        onClick={() => setMinimize(prev => !prev)}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'primary.main', padding: 2, borderRadius: '12px 12px 0 0', width: '100%', height: '50px', '&:hover': { backgroundColor: 'primary.dark' } }}
      >
        <Typography color="white" sx={{ fontSize: '15px', fontWeight: 600 }}>New Chat</Typography>
        <IconButton onClick={() => setExit(!exit)} style={{ cursor: 'pointer' }}>
          <CloseIcon sx={{ color: 'white' }} />
        </IconButton>
      </Button>

      {minimize && (
        // <Box sx={{ borderRadius: '0 0 12px 12px', boxShadow: 3, padding: 2, maxWidth: '100%', height: '60vh', display: 'flex', flexDirection: 'column', backgroundImage: `url(${ChatBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'background.paper' }}>
        //   <Box sx={{ flex: 1, overflowY: 'auto', padding: 1, display: 'flex', flexDirection: 'column' }}>
        //     {formChat.map((message, idx) => (
        //       <Paper key={idx} sx={{ padding: "8px 16px", maxWidth: '70%', marginBottom: 1, alignSelf: message.sender === "user" ? "flex-end" : "flex-start", backgroundColor: message.sender === "user" ? 'primary.main' : 'grey.400', color: 'white', borderRadius: 2 }}>
        //         <Typography>{message.text}</Typography>
        //       </Paper>
        //     ))}
        //   </Box>

        //   <FormControl component="form" onSubmit={handleSendMessage}>
        //     <Box sx={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 1 }}>
        //       <TextField
        //         label="Write Message"
        //         variant="outlined"
        //         disabled={isLoading}
        //         fullWidth
        //         value={messageText}
        //         onChange={(e) => setMessageText(e.target.value)}
        //         sx={{ '& .MuiOutlinedInput-root': { borderRadius: 12 } }}
        //       />
        //       <IconButton type="submit" disabled={isLoading} sx={{ color: 'primary.main' }}>
        //         <SendIcon />
        //       </IconButton>
        //     </Box>
        //   </FormControl>
        // </Box>
        <>
          <Chats background={ChatBackground} />
          <ChatInput />
        </>
      )}
    </Container>
  );
};

export default ChatWindow;
