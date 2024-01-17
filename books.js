const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}
main()
  .then((res) => {
    console.log("Connection Successful.");
  })
  .catch((err) => {
    console.log(err);
  });

let bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  discount: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    min: [1, "Price is too low for Amazon selling"],
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate(
  "65a539c238387b3187401103",
  { price: -500 },
  { new: true, runValidators: true }
)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors.price.properties.message);
  });

// let book4 = new Book({
//   title: "On Girl",
//   price: 12,
//   category: "comic",
// });

// book4
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
