"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ytdl_core_1 = __importDefault(require("ytdl-core"));
const fs = require("fs");
const app = (0, express_1.default)();
// app.use(express.json());
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get("/api/download/:url", (req, res) => {
    res.header("Content-Disposition", 'attachment; filename="video.mp4"');
    (0, ytdl_core_1.default)(req.params.url, {
        // @ts-ignore: Unreachable code error
        format: "mp4",
    }).pipe(res);
});
app.listen(4000, () => {
    console.log("Server Works !!! At port 4000");
});
