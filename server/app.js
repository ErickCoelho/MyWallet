import express from "express";
import router from "./routes/index.js";

const app = express();
app.use(express.json());

app.use(router);

app.listen(5001, () => {
  console.log("Server is listening on port 5001.");
});
