import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.user.routes.js"
import authRoutesAdmin from "./routes/auth.superuser.routes.js"
import connectionDB from "./database/connectionDB.js"

const App = express()
dotenv.config()

const PORT = process.env.PORT

// Middleware
App.use(express.json()) // to parse incoming requests with json payloads

// Routes
// Admin Routes
App.use('/api/auth/admin', authRoutesAdmin)

// User Routes
App.use('/api/auth', authRoutes)

App.listen(PORT, () => {
    connectionDB()
    console.log(`Live on http://localhost:${PORT}`)
})