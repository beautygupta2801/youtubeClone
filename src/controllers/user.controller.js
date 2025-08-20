import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { User} from "../modals/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";




const registerUser = asyncHandler( async (req, res) => {
    

    res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )

} )

export {
    registerUser,
}
