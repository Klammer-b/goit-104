import Joi from 'joi';

export const createStudentValidationSchema = Joi.object({
  name: Joi.string().required().min(2).max(20).messages({
    'string.base': `"name" should be a type of 'text'`,
    'string.min': `"name" should have a minimum length of {#limit}`,
    'any.required': `"name" is a required field`,
  }),
  age: Joi.number().required().integer().min(6).max(17),
  gender: Joi.string().required().valid('male', 'female', 'other'),
  avgMark: Joi.number().required().min(1).max(12),
  onDuty: Joi.boolean(),
});
