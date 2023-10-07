import userSchema from "../schemas/userSchema";

export default function userSchemaValidationMiddleware (req, res, next) {
  const validation = userSchema.validate(req.body);

  if (validation.error)
    res.send(422);

  next();
}