import express from "express"
import { receiveMessage, sendMessage } from "../controllers/message.controller.js"
import protectRoute from "../middlewares/protectRoute.middleware.js"

const Router = express.Router()

Router.post('/send/:id', sendMessage)

Router.get('/:id', receiveMessage)

export default Router