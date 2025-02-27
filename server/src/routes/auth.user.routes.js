import express from "express"
import { getDetails, login, signup } from "../controllers/auth.controller.js"
import protectedRoute from "../middlewares/secureRoute.middleware.js"

const router = express.Router()

// Login
router.post("/login", login)

// Signup
router.put("/signup", signup)

// Get Details
router.get("/getdetails", protectedRoute, getDetails)

// Logout
// router.delete("/logout", logout)

export default router