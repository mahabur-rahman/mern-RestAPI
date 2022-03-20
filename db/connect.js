const mongoose = require("mongoose");
const DB = process.env.DATABASE;

// mongoose
//   .connect(DB)
//   .then(() => {
//     console.log(``);
//   })
//   .catch((err) => {
//     console.log("No connection" + err);
//   });

// const mongoose = require("mongoose");
// const DB = process.env.DATABASE_URI;

// connect with db
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

// export
module.exports = connectDB;
