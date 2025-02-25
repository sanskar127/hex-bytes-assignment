import ChatModel from "../models/chat.model.js"
import MessageModel from "../models/message.model.js"

export const sendMessage = async (req, res) => {
    try {
        // Retrive Sender id, Receiver id, Message
        const { message } = req.body
        const { id: receiverId } = req.params
        const senderId = req.user._id
        
        // Check whether Conversation exist
        let chat = await ChatModel.findOne({ participants: { $all: [senderId, receiverId] } })
        
        // Create Conversation if not exits
        if (!chat) {
            chat = await ChatModel.create({ participants: [senderId, receiverId] })
        }
        
        // creating new message
        const newMessage = await MessageModel.create({
            senderId,
            receiverId,
            message
        })

        // pushing new message in messages array and handling using promise
        chat.messages.push(newMessage._id)
        await Promise.all([chat.save(), newMessage.save()])

        // handling socket emit...

        // testing response
        res.status(201).json(newMessage)
    } catch (error) {
        res.status(500).json({ error: "Can't Send Message" })
    }
}

export const receiveMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params
        const senderId = req.user._id

        const chat = await ChatModel.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("messages")

        if (!chat) return res.status(200).json([])

        res.status(200).json(chat.messages)

    } catch (error) {
        res.status(500).json({ error: "Can't Receive Message" + error.message })
    }
}
