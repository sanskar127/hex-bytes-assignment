import express from "express"
import { login, signup } from "../controllers/auth.controller.js"

const router = express.Router()

// Login
router.post("/login", login)

// Signup
router.put("/signup", signup)

// Logout
// router.delete("/logout", logout)

export default router