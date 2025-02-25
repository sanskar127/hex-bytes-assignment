import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes"

const App = express()

dotenv.config()
const PORT = process.env.PORT || 3000

// Routes
// Admin Routes
// App.use('/api/auth/admin', )


// User Routes
App.use('/api/auth', authRoutes)

App.listen(PORT, () => console.log(`Live on http://localhost:${PORT}`))