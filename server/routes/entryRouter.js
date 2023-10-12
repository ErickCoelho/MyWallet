import { Router } from "express";
import { tokenValidationMiddleware } from "../middlewares/tokenValidationMiddleware.js";
import { createEntry, deleteEntry, getEntries, updateEntry } from "../controllers/entryController.js";
import entrySchemaValidationMiddleware from "../middlewares/entrySchemaValidationMiddleware.js";

const entryRouter = Router();
entryRouter.use(tokenValidationMiddleware);
entryRouter.post("/entry", entrySchemaValidationMiddleware, createEntry);
entryRouter.get("/entry", getEntries);
entryRouter.put("/entry", entrySchemaValidationMiddleware, updateEntry);
entryRouter.delete("/entry", deleteEntry);
export default entryRouter;
