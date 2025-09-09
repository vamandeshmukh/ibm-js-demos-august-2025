// // console.log("user.service.js");

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserRepository from "../repositories/mysql/user.repository.js";
import { NotFoundError, ValidationError, ConflictError } from "../errors/app.errors.js";

const userRepository = new UserRepository();
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

export default class UserService {

  getAllUsers = async () => {
    const users = await userRepository.findAll();
    return users.map(u => u.toResponse());
  };

  getUserProfile = async (id) => {
    const user = await userRepository.findById(id);
    if (!user) throw new NotFoundError("User not found");
    return user.toResponse();
  };

  createUser = async (userData) => {
    const { name, email, phone, role, password } = userData;

    if (!name || !email || !phone || !role || !password) {
      throw new ValidationError("Missing required fields: name, email, phone, role, password");
    }

    const existingUser = await userRepository.findByEmail(email);

    // more errors can be added here

    if (existingUser) throw new ConflictError("User with this email already exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userRepository.create({ ...userData, password: hashedPassword });
    return newUser.toResponse();
  };

  loginUser = async (user) => {
    const { email, password } = user;
    if (!email || !password) {
      throw new ValidationError("Email and password are required");
    }
    // more errors can be added here
    const user = await userRepository.findByEmail(email);
    if (!user) throw new NotFoundError("Invalid email or password");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new ValidationError("Invalid email or password");

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
    return { token, user: user.toResponse() };
  };
}



