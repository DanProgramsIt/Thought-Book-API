const router = require("express").Router();
const {
  getAllUsers,
  getOneUser,
  createUser,
  addFriend,
  updateUser,
  deleteUser,
  removeFriend,
} = require("../../controllers/user-controller");

// GET all users -- POST a user
router.route("/").get(getAllUsers).post(createUser);

// GET one user -- PUT or DELETE a user
router.route("/:id").get(getOneUser).put(updateUser).delete(deleteUser);

// POST add a friend to a users friend list -- DELETE a friend
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
