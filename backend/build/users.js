"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var users = [];
router.use(express_1.default.json());
/**
 * You need a way to create users so post.
 * You also need a way to delete users
 */
router
    .route("/")
    .get(function (req, res) { return res.send(users); })
    .post(function (req, res) { });
module.exports = router;
