import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";

export default async (token) => {
    try {
        if (!token) {
            throw new Error("Access Denied! valid token not found");
        }

        let data = null;

        // Use await with jwt.verify to handle asynchronously
        const decoded = await new Promise((resolve, reject) => {
            jwt.verify(token, process.env.SECRET, (err, details) => {
                if (err) {
                    reject(new Error("Invalid token"));
                } else {
                    resolve(details);
                }
            });
        });

        // Use await here as findById is also asynchronous
        data = await UserModel.findById(decoded?.sub);

        return data;

    } catch (error) {
        return error;
    }
}
