const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});

app.get("/", (req, res) => {
  res.send("Hello!");
});

main()
  .then((val) => {
    // console.log(val);
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//Index route
app.get("/chats", async (req, res) => {
  chats = await Chat.find();
  //   console.log(chats);
  res.render("index.ejs", { chats });
});
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});
app.post("/chats", (req, res) => {
  let { from, message, to } = req.body;
  let newChat = new Chat({
    from: from,
    msg: message,
    to: to,
    created_at: new Date(),
  });
  newChat
    .save()
    .then(() => {
      console.log("Chat was saved");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  console.log(id);
  let { edited_msg } = req.body;
  console.log(edited_msg);
  let user = await Chat.findById(id);
  console.log(user);
  await Chat.updateOne({ _id: id }, { msg: edited_msg });
  //   await Chat.findByIdAndUpdate(
  //     id,
  //     { msg: edited_msg },
  //     { runValidators: true, new: true }
  //   );
  res.redirect("/chats");
});

app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
});
