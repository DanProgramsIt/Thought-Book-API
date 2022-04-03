const router = require("express").Router();
const {
  getAllThoughts,
  getOneThought,
  createThought,
  addReaction,
  updateThought,
  deleteThought,
  removeOneReaction,
  removeAllReaction,
} = require("../../controllers/thought-controller");

// GET all Thoughts -- POST a Thought
router.route("/").get(getAllThoughts).post(createThought);

// GET one Thought -- PUT and DELETE a Thought
router
  .route("/:id")
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

// POST a reaction -- DELETE all reactions from a Thought
router
  .route("/:thoughtId/reactions")
  .post(addReaction)
  .delete(removeAllReaction);

// DELETE a reaction
router.route("/:thoughtId/reactions/:reactionId").delete(removeOneReaction);

module.exports = router;
