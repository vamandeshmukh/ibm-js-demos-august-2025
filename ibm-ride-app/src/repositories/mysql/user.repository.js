console.log("user.repository.js");

import pool from "../../config/mysql.js";
import UserEntity from "../../entities/user.entity.js";

export default class UserRepository {

  findAll = async () => {
    console.log("Repository: findAll");
    const [rows] = await pool.query("SELECT * FROM users");
    return rows.map((row) => new UserEntity(row));
  };

  findById = async (id) => {
    console.log("Repository: findById", id);
    const [rows] = await pool.query("SELECT * FROM users WHERE id = ? LIMIT 1", [id]);
    return rows.length ? new UserEntity(rows[0]) : null;
  };

  findByEmail = async (email) => {
    console.log("Repository: findByEmail", email);
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ? LIMIT 1", [email]);
    return rows.length ? new UserEntity(rows[0]) : null;
  };

  create = async (userData) => {
    console.log("Repository: create", userData);
    const { name, email, phone, role } = userData;
    const [result] = await pool.query(
      "INSERT INTO users (name, email, phone, role) VALUES (?, ?, ?, ?)",
      [name, email, phone, role]
    );

    return new UserEntity({
      id: result.insertId,
      name,
      email,
      phone,
      role,
    });
  };
}



