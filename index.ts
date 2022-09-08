import express from "express";
import cors from "cors";
import ytdl from "ytdl-core";

const app = express();
const port = 3333;

// app.use(express.json())

app.get("/", (req, res) => {
  res.sendFile(__dirname.replace("dist", "") + "/index.html");
  // res.send("d");
});
app.get("/api/download/:url", (req, res) => {
  res.header("Content-Disposition", 'attachment; filename="video.mp4"');
  ytdl(req.params.url, {
    // @ts-ignore: Unreachable code error
    format: "mp4",
  }).pipe(res);
});

app.listen(port, () => {
  console.log("Server Works !!! At port 3333");
});
