import express from "express"
import { login, logout, signup } from "../controllers/auth.controller"

const router = express.Router()

// Login
router.put("/login", login)

// Signup
router.put("/login", signup)

// Logout
router.put("/login", logout)
