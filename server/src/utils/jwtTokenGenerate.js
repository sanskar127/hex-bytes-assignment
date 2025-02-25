import jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()

// export default generateTokenAndSetCookie = (uId, res) => {
//     const token = jwt.sign({ uId }, process.env.JWT_SECRET, {
//         expiresIn: "15d"
//     })

//     res.cookie("token", token, {
//         maxAge: 15 * 24 * 60 * 60 * 1000, // MS
//         httpOnly: true,
//         sameSite: "strict"
//     })
// }

export default (credentials) => {
    return jwt.sign(
        credentials,
        process.env.SECRET,
        { expiresIn: '15d' }
    )
}