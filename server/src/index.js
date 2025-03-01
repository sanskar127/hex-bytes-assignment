import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import { Server } from "socket.io"
import { createServer } from "http"
import getDetails from "./utils/getDetails.js"
import userRoutes from "./routes/user.routes.js"
import authRoutes from "./routes/auth.user.routes.js"
import connectionDB from "./database/connectionDB.js"
import messageRoutes from "./routes/message.routes.js"
import authRoutesAdmin from "./routes/auth.superuser.routes.js"

const App = express()
const httpServer = createServer(App)
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "PUT", "POST"]
  }
})
dotenv.config()

const PORT = process.env.PORT

// Socket.io
const userSocketMap = {}; // {userId: socketId}

export const getReceiverSocketId = receiver => userSocketMap[receiver];

io.on("connection", async socket => {

  // Extracting User Details from accesstoken
  const user = await getDetails(socket.handshake.query.token)
  const userId = user?._id?.toString()

  if (userId !== undefined) {
    userSocketMap[userId] = socket.id;
    console.log("a user connected", userId);
  }

  socket.emit("getDetails", user)

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("newMessage", ({ receiverId, message }) => {
    const receiverSocketId = userSocketMap[receiverId]
    
    if (receiverSocketId) {
      const receivedMessage = {
        senderId: userId,
        receiverId,
        message,
      }
      
      io.to(receiverSocketId).emit("newMessage", receivedMessage);
    }
  });

  socket.on("disconnect", () => {
    console.log("user disconnected", userId);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

// Middleware
App.use(express.json())
App.use(cors())

// Routes
App.use('/api/message', messageRoutes)
App.use('/api/users', userRoutes)

// Admin Routes
App.use('/api/auth/admin', authRoutesAdmin)

// User Routes
App.use('/api/auth', authRoutes)

httpServer.listen(PORT, () => {
  connectionDB()
  console.log(`Live on http://localhost:${PORT}`)
})