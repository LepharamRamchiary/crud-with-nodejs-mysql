import User from "../model/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponnse from "../utils/ApiResponse.js";

// Create a new user
const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({ name, email, password });
  res
    .status(201)
    .json(new ApiResponnse(201, user, "User created successfully"));
});

export { createUser };
