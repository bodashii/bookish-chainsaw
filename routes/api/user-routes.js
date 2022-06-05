const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  CreateUser,
  updateUserById,
  deleteUserById,
} = require("../../controllers/user-controller");

// api/users
router.route("/").get(getAllUsers).post(createUser);

// api/users/:id
router.route("/:userId").get(getUserById).put(updateUserById).delete(deleteUserById);

module.exports = router;
