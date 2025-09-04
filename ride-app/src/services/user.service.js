console.log("user.service.js");

import UserRepository from "../repositories/mysql/user.repository.js";
import UserEntity from "../entities/user.entity.js";

const userRepository = new UserRepository();

export default class UserService {
  async registerUser(userData) {
    const userEntity = new UserEntity(userData);
    return await userRepository.create(userEntity);
  }

  async getUserProfile(id) {
    return await userRepository.findById(id);
  }
}