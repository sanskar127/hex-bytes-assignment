import mongoose from "mongoose"

const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI + "/supportchat")
        console.log("Connected to DB Successfully")
    } catch (error) {
        console.log({ src: "mongoose connection", message: error.message })
    }
}

export default connectionDB