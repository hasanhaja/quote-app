import express from "express";

const router = express.Router();

interface User {
  name: string;
  password: string;
}

const users: User[] = [];

router.use(express.json());

/**
 * You need a way to create users so post.
 * You also need a way to delete users
 */
router
  .route("/")
  .get((req, res) => res.send(users))
  .post((req, res) => {});

export = router;
