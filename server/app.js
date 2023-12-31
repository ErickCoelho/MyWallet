import express from "express";
import router from "./routes/index.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.listen(process.env.PORT, () => {
  console.log("Server is listening on port " + process.env.PORT);
});
