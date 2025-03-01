import { useState } from "react";
import { IconButton, Box, ListSubheader, Grid2, ListItemButton, ListItemText, Divider, Typography } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Chats from "../../components/Chats";
import ChatInput from "../../components/ChatInput";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatsBackground from "../../assets/chat_bg_cover.png";
import { useGetUsersQuery } from "../../api/chatApi";
import { setSelectedChat } from "../../features/Chat/chatSlice"
import { useDispatch, useSelector } from "react-redux"

const App = () => {
  const { data, error, isLoading } = useGetUsersQuery();
  const dispatch = useDispatch()

  const [minimize, setMinimize] = useState(true);
  const [exit, setExit] = useState(false);
  const [formChat, setFormChat] = useState([{ sender: "bot", text: "Hi, I am Bhaskar Anna! Can I ask your issue?" }]);
  const [supportForm, setSupportForm] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [index, setIndex] = useState(0);
  const [isLoadingMessage, setIsLoading] = useState(false);

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

  const handleExit = () => {
    // setExit(true); // Close chat window when exit button is clicked
  };

  const handleMinimize = () => {
    setMinimize(prev => !prev);
  };

  if (exit) {
    return null; // If exit is true, return nothing to close the chat
  }

  const dummyMessages = [
    { sender: "user", text: "Hey, how's it going?" },
    { sender: "bot", text: "Hello! I'm doing great, thanks for asking. How about you?" },
    { sender: "user", text: "I'm good too! What can you do?" },
    { sender: "bot", text: "I can help you with various tasks, like answering questions, giving recommendations, or just chatting!" },
    { sender: "user", text: "That's awesome! Can you tell me a joke?" },
    { sender: "bot", text: "Sure! Why don't skeletons fight each other? Because they don't have the guts!" },
    { sender: "user", text: "Haha, that was a good one! Tell me another!" },
    { sender: "bot", text: "Alright, here's another: Why don't eggs tell jokes? Because they'd crack each other up!" }
  ];

  return (
    <>
      <Grid2 size={3}>
        <Sidebar subHeader={
          <>
            <ListSubheader component="div">Open Discussions</ListSubheader>
          </>
        }>
          {isLoading ? (
            <Typography>Loading users...</Typography>
          ) : error ? (
            <Typography>Error loading users: {error.message}</Typography>
          ) : data && data.length > 0 ? (
            data.map(item => (
              <ListItemButton key={item._id} onClick={() => dispatch(setSelectedChat(item))} >
                <ListItemText primary={item.fullname} />
                <IconButton disabled><NavigateNextIcon /></IconButton>
              </ListItemButton>
            ))
          ) : (
            <Typography>No users found</Typography>
          )}
        </Sidebar>
      </Grid2>

      <Grid2 size="grow">
        <Box sx={{ padding: "4px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography>User Name</Typography>
          <IconButton><MoreVertIcon /></IconButton>
        </Box>
        <Divider />

        <Chats background={ChatsBackground} />
        <ChatInput />
      </Grid2>
    </>
  );
};

export default App;
