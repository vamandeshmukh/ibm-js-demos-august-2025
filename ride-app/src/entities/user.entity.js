console.log("user.entity.js");

export default class UserEntity {

  id;
  name;
  email;
  phone;
  role;

  constructor({ id = null, name, email, phone, role }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.role = role;
  }

}