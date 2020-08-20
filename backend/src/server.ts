import express from "express";
import quotes from "./quotes";
import users from "./users";

const app = express();
const PORT = 8000;

app.use("/quotes", quotes);
app.use("/users", users);

app.get("/", (req, res) => res.send("Welcome to Quotes!"));

app.listen(PORT, () => {
  console.log(`🚀 [server]: Server is running at https://localhost:${PORT}`);
});
