const express = require("express");
const app = express();
const colors = require("colors");
const dotenv = require("dotenv");
const router = require("./routes/auth");
const { errorHandler } = require("./middleware/error.middleware");

// env
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 5000;
// connect with db
const connectDB = require("./db/connect");
connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", router);

// error handler middleware
app.use(errorHandler);

// listen app
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
