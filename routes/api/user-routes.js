const router = require('express').Router();
const { getAllUsers, getUserById, CreateUser } = require('../../controllers/user-controller');

// api/users
router.route('/').get(getAllUsers)

// api/users/:id
router.route('/:userId').get(getUserById);

module.exports = router;