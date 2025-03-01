import { Box, IconButton, TextField, FormControl } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatInput = ({ handleSendMessage, messageText, setMessageText, isLoading }) => {
  return (
    <FormControl component="form" onSubmit={handleSendMessage}>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 1 }}>
        <TextField
          label="Write Message"
          variant="outlined"
          disabled={isLoading}
          fullWidth
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 12 } }}
        />
        <IconButton type="submit" disabled={isLoading} sx={{ color: 'primary.main' }}>
          <SendIcon />
        </IconButton>
      </Box>
    </FormControl>
  );
};

export default ChatInput;
