"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var quotes_1 = __importDefault(require("./quotes"));
var users_1 = __importDefault(require("./users"));
var app = express_1.default();
var PORT = 8000;
app.use("/quotes", quotes_1.default);
app.use("/users", users_1.default);
app.get("/", function (req, res) { return res.send("Welcome to Quotes!"); });
app.listen(PORT, function () {
    console.log("\uD83D\uDE80 [server]: Server is running at https://localhost:" + PORT);
});
