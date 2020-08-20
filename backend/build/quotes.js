"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
/**
 * Router is like a mini-app
 */
var router = express_1.default.Router();
var quotes = [];
router
    .route("/")
    .get(function (req, res) { return res.send("Getting from quotes 🕵🏾‍♀️"); })
    .post(function (req, res) { return res.send("Posting to quotes ✉️"); });
router.route("/best").get(function (req, res) { return res.send("The best quote is: 😅"); });
module.exports = router;
