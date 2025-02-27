import express from "express"
import { login } from "../controllers/auth.controller.js"

const router = express.Router()

// Login
router.post("/login", login)

// Signup
// router.put("/signup", signupAdmin)

// Logout
// router.delete("/logout", logout)

export default router