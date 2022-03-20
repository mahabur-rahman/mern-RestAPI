const asyncHandler = require("express-async-handler");
const Field = require("../model/goalSchema");

// @Desc Get goal
// @route GET /api/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Field.find();
  // res.status(200).json({
  //   message: "Get data",
  // });
  res.status(200).json(goals);
});

// @Desc Create / Post goal
// @route POST /api/goals
// @access Private

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    // res.status(400).json({ message: "Please add a text field" });
    res.status(400);
    throw new Error("Please add a text field");
  }

  const goal = await Field.create({
    text: req.body.text,
  });

  // res.status(201).json({
  //   message: `Post data | Body text :  ${req.body.text}`,
  // });

  res.status(201).json(goal);
});

// @Desc Update goal
// @route PUT /api/goals/:id
// @access Private

const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Field.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  // updated goal
  const updatedGoal = await Field.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  // res.status(200).json({
  //   message: `Update data ${req.params.id}`,
  // });
  res.status(200).json(updatedGoal);
});

// @Desc Delete goal
// @route DELETE /api/goals/:id
// @access Private

const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Field.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  await Field.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message: `Delete data ${req.params.id}`,
  });
});

// export
module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
