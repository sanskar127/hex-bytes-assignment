import { Schema, model } from "mongoose"

const UserSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwd: {
        type: String,
        required: true
    },
    superuser: {
        type: Boolean,
        required: true
    }
}, { timestamps: true })

const User = model("User", UserSchema)

export default User