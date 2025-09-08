console.log("user.service.js");

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
    if (existingUser) throw new ConflictError("User with this email already exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userRepository.create({ ...userData, password: hashedPassword });
    return newUser.toResponse();
  };

  loginUser = async (email, password) => {
    const user = await userRepository.findByEmail(email);
    if (!user) throw new NotFoundError("Invalid email or password");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new ValidationError("Invalid email or password");

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
    return { token, user: user.toResponse() };
  };
}


// console.log("user.service.js");

// import UserRepository from "../repositories/mysql/user.repository.js";
// import { NotFoundError, ValidationError, ConflictError } from "../errors/app.errors.js";

// const userRepository = new UserRepository();

// export default class UserService {

//   getAllUsers = async () => {
//     console.log("Service: getAllUsers");
//     return await userRepository.findAll();
//   };

//   getUserProfile = async (id) => {
//     console.log("Service: getUserProfile", id);
//     const user = await userRepository.findById(id);
//     console.log(user);
//     if (!user) {
//       throw new NotFoundError("User not found");
//     }
//     return user;
//   };

//   createUser = async (userData) => {
//     console.log("Service: createUser", userData);
//     const { name, email, phone, role } = userData;

//     if (!name || !email || !phone || !role) {
//       throw new ValidationError("Missing required fields: name, email, phone, role");
//     }

//     const existingUser = await userRepository.findByEmail(email);
//     if (existingUser) {
//       throw new ConflictError("User with this email already exists");
//     }

//     return await userRepository.create(userData);
//   };
// }





