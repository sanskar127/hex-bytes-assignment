import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()

export default (sub) => {
    return jwt.sign(
        { sub },
        process.env.SECRET,
        { expiresIn: '15d' }
    )
}