const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goal.controller");

// short route | GET | POST

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

// read data
// router.get("/", getGoals);

// post data
// router.post("/", setGoal);

// update data
// router.put("/:id", updateGoal);

// Delete data
// router.delete("/:id", deleteGoal);

// export
module.exports = router;
