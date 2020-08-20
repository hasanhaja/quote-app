import express from "express";

/**
 * Router is like a mini-app
 */
const router = express.Router();

interface Quote {
  date: string;
  content: string;
}

const quotes: Quote[] = [];

router
  .route("/")
  .get((req, res) => res.send("Getting from quotes 🕵🏾‍♀️"))
  .post((req, res) => res.send("Posting to quotes ✉️"));

router.route("/best").get((req, res) => res.send("The best quote is: 😅"));

export = router;
