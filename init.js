const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then((val) => {
    // console.log(val);
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
let allChats = [
  {
    from: "Saugat",
    to: "Aakriti",
    msg: "Send me money!",
    created_at: new Date(),
  },
  {
    from: "John",
    to: "Alice",
    msg: "Hello there!",
    created_at: new Date(),
  },
  {
    from: "Emma",
    to: "David",
    msg: "Meeting at 2 PM",
    created_at: new Date(),
  },
  {
    from: "Michael",
    to: "Sophia",
    msg: "Happy birthday!",
    created_at: new Date(),
  },
  {
    from: "Daniel",
    to: "Olivia",
    msg: "How are you?",
    created_at: new Date(),
  },
  {
    from: "Ethan",
    to: "Ava",
    msg: "Let's catch up soon!",
    created_at: new Date(),
  },
  {
    from: "William",
    to: "Isabella",
    msg: "Need your help!",
    created_at: new Date(),
  },
  {
    from: "Mia",
    to: "James",
    msg: "Thanks for the support!",
    created_at: new Date(),
  },
  {
    from: "Benjamin",
    to: "Emily",
    msg: "Dinner tonight?",
    created_at: new Date(),
  },
  {
    from: "Aiden",
    to: "Scarlett",
    msg: "Movie night?",
    created_at: new Date(),
  },
];
Chat.insertMany(allChats);
