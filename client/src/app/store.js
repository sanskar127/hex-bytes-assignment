import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../features/Auth/authSlice"
import chatReducer from "../features/Chat/chatSlice"
import { authApi } from "../api/authApi"
import { chatApi } from "../api/chatApi"
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
    auth: authReducer,
    chat: chatReducer
  },
  middleware: getDefaultMiddleWare =>
    getDefaultMiddleWare().concat(authApi.middleware).concat(chatApi.middleware)
})

setupListeners(store.dispatch)