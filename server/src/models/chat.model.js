import { Schema, model } from "mongoose"

const ChatSchema = new Schema({
    // ticketInfo: {
    //     type: Object,
    //     ref: "User",
    //     required: true
    // },
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    messages: [
        {
            type: Schema.Types.ObjectId,
            ref: "Message",
            default: []
        }
    ]
}, { timestamps: true })

const Chat = model("Chat", ChatSchema)
export default Chat