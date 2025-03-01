import express from "express"
import { getUsers } from "../controllers/userController.js"
import secureRoute from "../middlewares/secureRoute.middleware.js"
const Router = express.Router()

Router.get('/', secureRoute, getUsers)

export default Router