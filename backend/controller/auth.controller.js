import userModel from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";

export const signup = async (req, res, next) => {
  let user = req.body;
  try {
    const uploadResult = await cloudinary.uploader
      .upload(req.body.avatar, {
        folder: "job-finding-app",
      })
      .catch((error) => {
        next(error);
      });

    if (uploadResult) {
      user.avatar = uploadResult.secure_url;

      let userPassword = user.password;
      user.password = await bcrypt.hash(userPassword, 10);

      await userModel.create(user);

      res.json({
        success: true,
        message: "User signUp",
      });
    }
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  let user = req.body;

  try {
    if (!user.email) return next(new Error("provide Email"));
    if (!user.password) return next(new Error("provide Password"));

    let dbuser = await userModel.findOne({ email: user.email });

    if (dbuser === null) return next(new Error("Invalid User"));

    let logpassword = await bcrypt.compare(user.password, dbuser.password);

    if (!logpassword) return next(new Error("Invalid Password"));

    let jwt_key = jwt.sign(
      {
        id: dbuser._id,
        username: dbuser.username,
        email: dbuser.email,
        role: dbuser.roles,
      },
      process.env.TOKEN,
      { expiresIn: "2h" }
    );

    res.cookie("auth", jwt_key, { maxAge: 90000, httpOnly: true }).json({
      token: jwt_key,
      message: "logIn successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const logout = (req, res, next) => {
  try {
    res.cookie("auth", null, { maxAge: Date.now() }).json({
      message: "logout successfully",
    });
  } catch (error) {
    next(error);
  }
};
