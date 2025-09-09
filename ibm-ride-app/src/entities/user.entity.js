// console.log("user.entity.js");

export default class UserEntity {

  constructor({ id, name, email, phone, role, password }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.role = role;
    this.password = password;
  }

  toResponse() {
    const { password, ...safeData } = this;
    return safeData;
  }
}


