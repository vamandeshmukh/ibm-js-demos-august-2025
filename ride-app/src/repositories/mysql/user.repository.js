import pool from "../../config/mysql.js";
import UserEntity from "../../entities/user.entity.js";

export default class UserRepository {

  async findById(id) {
    const [rows] = await pool.query(
      "SELECT * FROM users WHERE id = ? LIMIT 1",
      [id]
    );
    return rows.length ? new UserEntity(rows[0]) : null;
  }
}
