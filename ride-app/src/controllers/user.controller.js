console.log("user.controller.js");

import UserService from "../services/user.service.js";

const userService = new UserService();

export async function getUser(req, res) {
  console.log(req.params.id);
  try {
    const user = await userService.getUserProfile(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


