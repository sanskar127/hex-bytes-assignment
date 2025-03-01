import { createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    selectedChat: null,
    messages: [],
  },
  reducers: {
    setSelectedChat: (state, action) => {
      state.selectedChat = action.payload
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    }
  }
})

export const { setSelectedChat, setMessages } = chatSlice.actions;
export default chatSlice.reducer;