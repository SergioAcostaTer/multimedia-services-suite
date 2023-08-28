//express server

const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3000;

app.use(cors());

//self pinging

const cron = require("node-cron");

cron.schedule("*/10 * * * *", () => {
  fetch("https://downloader-back.onrender.com/").then(() => {
    console.log("pinged");
  });
});

const videoinfo = require("./routes/videoinfo");
const downloadvideo = require("./routes/downloadvideo");

app.use("/", videoinfo);
app.use("/", downloadvideo);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
