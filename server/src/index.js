import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import authRoutes from "./routes/auth.user.routes.js"
import userRoutes from "./routes/user.routes.js"
import authRoutesAdmin from "./routes/auth.superuser.routes.js"
import connectionDB from "./database/connectionDB.js"
import messageRoutes from "./routes/message.routes.js"

const App = express()
dotenv.config()

const PORT = process.env.PORT

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

App.listen(PORT, () => {
    connectionDB()
    console.log(`Live on http://localhost:${PORT}`)
})