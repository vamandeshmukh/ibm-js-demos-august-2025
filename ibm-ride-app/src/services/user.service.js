console.log("user.service.js");

import UserRepository from "../repositories/mysql/user.repository.js";
import { NotFoundError, ValidationError, ConflictError } from "../errors/app.errors.js";

const userRepository = new UserRepository();

export default class UserService {

  getAllUsers = async () => {
    console.log("Service: getAllUsers");
    return await userRepository.findAll();
  };

  getUserProfile = async (id) => {
    console.log("Service: getUserProfile", id);
    const user = await userRepository.findById(id);
    console.log(user);
    if (!user) {
      throw new NotFoundError("User not found");
    }
    return user;
  };

  createUser = async (userData) => {
    console.log("Service: createUser", userData);
    const { name, email, phone, role } = userData;

    if (!name || !email || !phone || !role) {
      throw new ValidationError("Missing required fields: name, email, phone, role");
    }

    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) {
      throw new ConflictError("User with this email already exists");
    }

    return await userRepository.create(userData);
  };
}



