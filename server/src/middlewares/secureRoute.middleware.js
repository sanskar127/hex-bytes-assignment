import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export default async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.split(' ')[1]

        if (!token) {
            return res.status(401).json({ message: "Access Denied! vaild token not found"})
        }

        jwt.verify(token, process.env.SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({ message: 'Invalid token' })
            }
            req.user = user

            next()
        })

    } catch (error) {
        return res.status(401).json({ message: error.message })
    }
}