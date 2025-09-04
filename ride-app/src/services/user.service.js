console.log("user.service.js");

import UserRepository from "../repositories/mysql/user.repository.js";

const userRepository = new UserRepository();

export default class UserService {

  async getUserProfile(id) {
    console.log(id);
    return await userRepository.findById(id);
  }
}