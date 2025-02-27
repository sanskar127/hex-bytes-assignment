import express from "express"
import { receiveMessage, sendMessage } from "../controllers/message.controller.js"
import secureRoute from "../middlewares/secureRoute.middleware.js"
const Router = express.Router()

Router.post('/send/:id', secureRoute, sendMessage)

Router.get('/:id', secureRoute, receiveMessage)

export default Router