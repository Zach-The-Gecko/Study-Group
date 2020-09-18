const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

app.get("/get-chats", (req, res) => {
  res.json({
    chats: [
      {
        authorID: "EwbV2pUFtPTmOUomrhHCe7R6Nu23", // Zach
        message: "Anyone wanna hang out?",
        messageID: 1,
      },
      {
        authorID: "hUq95CFnR3XvUBl0wOEgwVBtQrh1", // Billy
        message: "Sure, what time should I come over?",
        messageID: 2,
      },
      {
        authorID: "EwbV2pUFtPTmOUomrhHCe7R6Nu23", // Zach
        message: "I dunno is 3:00 good?",
        messageID: 3,
      },
      {
        authorID: "hUq95CFnR3XvUBl0wOEgwVBtQrh1", // Billy
        message: "That works for me!",
        messageID: 4,
      },
      {
        authorID: "Cu8gs8mBC5RfG2eYCeZa4AcawN93", // Brandon
        message: "I'll Come too if that's okay with u",
        messageID: 5,
      },
    ],
  });
});
