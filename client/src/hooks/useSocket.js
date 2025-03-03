import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { setUser } from "../features/Auth/authSlice";
import { newMessage } from "../features/Chat/chatSlice";
import { setSocket } from "../features/Socket/socketSlice"

export const useSocket = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.accesstoken);
    const socketRef = useRef(null);

    useEffect(() => {
        if (!token) return;

        socketRef.current = io("http://localhost:3000/", {
            query: { token },
        });

        const socket = socketRef.current;
        dispatch(setSocket(socket))

        socket.on("getDetails", (data) => dispatch(setUser(data)));
        socket.on("newMessage", (data) => {
            dispatch(newMessage(data))
            console.log(data)
        });

        return () => {
            socket.disconnect();
        };
    }, [token, dispatch]);

    return socketRef.current;
};
