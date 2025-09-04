console.log("user.repository.js");

import mysql from "mysql2/promise";
import UserEntity from "../../entities/user.entity.js";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ibm-ride-app"
});

export default class UserRepository {

  async create(userEntity) {
    const [result] = await pool.query(
      "INSERT INTO users (name, email, phone, role) VALUES (?, ?, ?, ?)",
      [userEntity.name, userEntity.email, userEntity.phone, userEntity.role]
    );
    return { ...userEntity, id: result.insertId };
  }

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
    if (rows.length === 0) return null;
    return new UserEntity(rows[0]);
  }
}