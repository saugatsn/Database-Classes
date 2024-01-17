const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
main()
  .then((res) => {
    console.log("Connection Successful.");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

User.findByIdAndDelete("65a508de684e5d703f4f4520")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// User.insertMany([
//   { name: "Aditya", email: "aad@yahoo.com", age: 22 },
//   { name: "Hulk", email: "hulkabdr@hottyfail.com", age: 53 },
//   { name: "Amazon", email: "az@google.com", age: 52 },
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const user1 = new User({
//   name: "Adam",
//   email: "adam@gmail.com",
//   age: 48,
// });

// const user2 = new User({
//   name: "Rahul",
//   email: "rk@yahoo.np",
//   age: 48,
// });

// user1.save();

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
