import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import userModel from '../models/user.model.js'
import generateJWT from "../utils/jwtTokenGenerate.js"

export const signup = async (req, res) => {
    try {
        // Getting user credentials 
        const { fullname, email, passwd, role } = req.body

        // Verifying Either the email already exists or not
        if (await userModel.findOne({ email })) {
            return res.status(400).json({
                message: "Entered Email already Exists! Please try with another email."
            })
        }

        // password hashing
        const salt = await bcrypt.genSalt(10)
        const hashedpasswd = await bcrypt.hash(passwd, salt)

        // Creating New User and sending to db
        const user = new userModel({
            fullname,
            email,
            passwd: hashedpasswd,
            role: role ? "admin" : "user"
        })

        // Saving User & creating access token
        if (user) {
            await user.save()
            res.status(201).json({ message: "Account Created Successfully, Please login with your credentials" })
        } else {
            res.status(400).json({ message: "Invaild User Credentials" })
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const login = async (req, res) => {
    try {
        // Requesting User Credentials
        const { email, passwd } = req.body

        // Finding User
        const user = await userModel.findOne({ email })
        const verifyEmail = await email === user?.email
        const verifyPasswd = await bcrypt.compare(passwd, (user?.passwd || ""))

        // verify user
        if (!verifyEmail || !verifyPasswd) {
            return res.status(400).json({ message: "Invalid Credentials" })
        }

        // sending Token
        const token = generateJWT({ sub: user._id, role: user.role })
        res.status(201).json({ accesstoken: token })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getDetails = async (req, res) => {
    try {
        // Retriving user id
        const { sub } = req.user

        // fetching user details from token
        const user = await userModel.findById(sub).select("-passwd")

        // details response
        res.status(201).json({ details: user })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// export const logout = async (req, res) => { }
