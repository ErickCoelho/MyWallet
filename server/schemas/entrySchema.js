import joi from 'joi';

const entrySchema = joi.object({
  value: joi.number().integer(),
  description: joi.string().required(),
  type: joi.string().valid('income', 'expense')
});

export default entrySchema;