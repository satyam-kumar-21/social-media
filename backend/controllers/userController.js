import User from "../models/userModel.js";
import cloudinary from "cloudinary";
import generateJwtToken from "../utils/generateJwtToken.js";

const createUser = async (req, res) => {
  try {
    let profilePicture;

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "user-profile-image",
        width: 250,
        height: 250,
        crop: "fill",
      });

      profilePicture = result.secure_url;
    }

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All feild are required",
        success: false,
      });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "User already exits.Please login",
        success: false,
      });
    }

    const newUser = await User.create({
      name,
      email,
      password,
      profilePicture,
    });

    res.status(201).json({
      success: true,
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in creating course",
      success: false,
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        profilePicture: user.profilePicture,
        token: generateJwtToken({ userId: user._id }),
      });
    } else {
      res.status(404).json({
        message: "Email and password are incorrect",
        success: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `error while login`,
      error: error.message,
    });
  }
};

export default { createUser, loginUser };
