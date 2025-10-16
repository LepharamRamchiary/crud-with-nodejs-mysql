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

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.findAll();
  res
    .status(200)
    .json(new ApiResponnse(200, users, "Users fetched successfully"));
});

const getSingleUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  res
    .status(200)
    .json(new ApiResponnse(200, user, "User fetched successfully"));
});

export { createUser, getUsers , getSingleUser};
