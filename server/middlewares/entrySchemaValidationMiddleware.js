import entrySchema from "../schemas/entrySchema.js";

export default function entrySchemaValidationMiddleware (req, res, next) {
  const validation = entrySchema.validate(req.body);

  if (validation.error)
    return res.sendStatus(422);

  next();
}