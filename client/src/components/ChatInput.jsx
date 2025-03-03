import { useState } from 'react'
import SendIcon from '@mui/icons-material/Send'
import { IconButton, FormControl } from '@mui/material'
import { useSendMessageMutation } from '../api/chatApi'
import { useSelector, useDispatch } from 'react-redux'
import { newMessage } from "../features/Chat/chatSlice"

const ChatInput = () => {
  const dispatch = useDispatch()
  const [message, setMessage] = useState("")
  const socket = useSelector((state) => state.socket.socket)
  const [sendMessage, { isLoading }] = useSendMessageMutation()
  const selectedChat = useSelector(state => state.chat.selectedChat)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Check if the message is empty or loading
    if (isLoading || !message.trim()) return

    await sendMessage({
      receiverId: selectedChat._id,
      message,
    }).unwrap()

    // Ensure socket is connected and emit the event
    if (socket && socket.connected) {
      socket.emit("newMessage", {
        receiverId: selectedChat._id,
        message
      })
      dispatch(newMessage(message))
      console.log(message)
    } else {
      console.error("Socket is not connected")
    }

    setMessage("")
  }


  return (
    <FormControl
      component="form"
      onSubmit={handleSubmit}
      sx={{
        bgcolor: "#ffffff80",
        border: "1px solid #0000001F",
        borderRadius: "15px",
        display: 'flex',
        flexDirection: "row",
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
        disabled={isLoading || !message.trim()}
      >
        <SendIcon sx={{ fontSize: '60%' }} />
      </IconButton>
    </FormControl>
  )
}

export default ChatInput
