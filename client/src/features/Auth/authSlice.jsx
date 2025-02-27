import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        accesstoken: JSON.parse(localStorage.getItem("token")) || null,
        user: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setAccessToken: (state, action) => {
            state.accesstoken = action.payload
        }
    }
})

export const { setUser, setAccessToken } = authSlice.actions
export default authSlice.reducer