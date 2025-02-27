import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../features/Auth/authSlice"
import { authApi } from "../api/authApi"
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleWare =>
    getDefaultMiddleWare().concat(authApi.middleware)
})

setupListeners(store.dispatch)