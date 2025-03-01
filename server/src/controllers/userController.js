import UserModel from "../models/user.model.js"

export const getUsers = async (req, res) => {
    try {
        const loggedInUserId = req.user.sub
        const filteredUsers = await UserModel.find({ _id: { $ne: loggedInUserId } }).select("-password")

        res.status(200).json(filteredUsers)
    } catch (error) {
        res.status(500).json({ error: "Internal server error" })
    }
}
