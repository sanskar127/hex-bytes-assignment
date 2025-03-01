import { setupListeners } from '@reduxjs/toolkit/query'
import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../features/Auth/authSlice"
import chatReducer from "../features/Chat/chatSlice"
import socketReducer from "../features/Socket/socketSlice"
import { authApi } from "../api/authApi"
import { chatApi } from "../api/chatApi"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
    socket: socketReducer,
    [authApi.reducerPath]: authApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer
  },
  middleware: getDefaultMiddleWare =>
    getDefaultMiddleWare({
      serializableCheck: {
        ignoredActions: ['socket/setSocket'], // Ignore specific actions
        ignoredPaths: ['socket.socket'], // Ignore specific paths in the state
      },
    }).concat(authApi.middleware).concat(chatApi.middleware)
})

setupListeners(store.dispatch)