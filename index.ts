import express from "express";
import cors from "cors";
import ytdl from "ytdl-core";
const fs = require("fs");

const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });
app.get("/api/download/:url", (req, res) => {
  res.header("Content-Disposition", 'attachment; filename="video.mp4"');
  ytdl(req.params.url, {
    // @ts-ignore: Unreachable code error
    format: "mp4",
  }).pipe(res);
});

app.get("/api/hello", (req, res) => {
  res.send("hi");
});

app.listen(4000, () => {
  console.log("Server Works !!! At port 4000");
});
