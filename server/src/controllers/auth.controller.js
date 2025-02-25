import bcrypt from 'bcrypt'
import userModel from '../models/user.model'
import generateJWT from "../utils/jwtTokenGenerate"

export const signup = async (req, res) => {
    try {
        // Getting user credentials 
        const { fullname, email, passwd } = req.body

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
            isAdmin: false
        })

        // Saving User & creating access token
        if (user) {
            await user.save()
            const token = generateJWT({ fullname, email })
            res.status(201).json({ token })
        } else {
            res.status(400).json({ message: "Invaild User Credentials" })
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const login = async () => { }

export const logout = async () => { }
