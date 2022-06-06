const router = require("express").Router();
const {
    getAllUsers,
    createUser,
  getUserById,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend
} = require("../../controllers/user-controller");

// api/users
router.route("/").get(getAllUsers).post(createUser);

// api/users/:id
router.route("/:userId").get(getUserById).put(updateUserById).delete(deleteUserById);

// api/users/:id/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
