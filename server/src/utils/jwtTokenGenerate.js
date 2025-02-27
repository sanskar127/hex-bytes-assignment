import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()

export default (credentials) => {
    return jwt.sign(
        credentials,
        process.env.SECRET,
        { expiresIn: process.env.EXPIRES_IN }
    )
}