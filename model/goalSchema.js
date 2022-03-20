const mongoose = require("mongoose");

// schema
const goalSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add text"],
    },
  },
  {
    timestamps: true,
  }
);

// model
const Field = mongoose.model("Field", goalSchema);

// export
module.exports = Field;
