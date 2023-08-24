import User from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  try {
    const { data } = req.body;
    const { userName, email, password, cPassword, role } = data;

    if (!userName || !email || !password || !cPassword || !role)
      return res.status(404).json({
        success: false,
        message: "All fields are mandatory",
      });

    if (password !== cPassword)
      return res.status(404).json({
        success: false,
        message: "password doesnot match",
      });

    const user = await User.find({ email });

    if (user.length)
      return res.status(404).json({
        success: false,
        message: "user already exist please try login",
      });

    const hashpassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      userName,
      email,
      password: hashpassword,
    });

    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "Registered Successfully",
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "error from catch block",
    });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body.loginInput;

    if (!email && !password)
      return res.status(404).json({
        success: false,
        message: "All fields are mandatory",
      });

    const user = await User.findOne({ email });

    // console.log(user);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
    const samePassword = await bcrypt.compare(password, user.password);

    if (samePassword) {
      const userObj = {
        userName: user.userName,
        email: user.email,
        userId: user._id,
      };
      const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
      //   console.log(token);

      return res.status(200).json({
        success: true,
        message: "Logged in Success",
        user: userObj,
        token: token,
      });
    }

    return res.status(404).json({
      success: false,
      message: "invalid credentials",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "error from catch block",
    });
  }
};

export const currentuser = async (req, res) => {
  try {
    const { token } = req.body;

    const decodeToken = jwt.verify(token, process.env.SECRET_KEY);

    // console.log(decodeToken);

    if (!decodeToken) {
      return res.status(404).json({
        success: false,
        message: "token is required",
      });
    }

    const userId = decodeToken?.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not Found",
      });
    }

    const userObj = {
      userName: user.userName,
      email: user.email,
      userId: user._id,
    };

    return res.status(200).json({
      success: true,
      message: "Got Current user",
      user: userObj,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "error from catch block",
    });
  }
};
