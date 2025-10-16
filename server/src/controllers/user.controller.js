import User from "../model/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

// Create a new user
const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({ name, email, password });
  res
    .status(201)
    .json(new ApiResponse(201, user, "User created successfully"));
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.findAll();
  res
    .status(200)
    .json(new ApiResponse(200, users, "Users fetched successfully"));
});

const getSingleUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, user, "User fetched successfully"));
});

// const updatedUser = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   const { name, email, password } = req.body;
//   const user = await User.findByPk(id);

//   if (!user) {
//     throw new ApiError(404, "User not found");
//   }

//   user.name = name ;
//   user.email = email ;
//   user.password = password ;
//   await user.save({validate: true});

//   res
//     .status(200)
//     .json(new ApiResponse(200, user, "User updated successfully"));
// });


const updatedUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  
  const user = await User.findByPk(id);
  
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  
  // Only update fields that are provided
  if (name !== undefined) {
    user.name = name;
  }
  if (email !== undefined) {
    user.email = email;
  }
  if (password !== undefined) {
    user.password = password;
  }
  
  await user.save({ validate: true });
  
  res
    .status(200)
    .json(new ApiResponse(200, user, "User updated successfully"));
});


export { createUser, getUsers , getSingleUser, updatedUser};
