import Joi from 'joi';

export const updateStudentValidationSchema = Joi.object({
  name: Joi.string().min(2).max(20),
  age: Joi.number().integer().min(6).max(17),
  gender: Joi.string().valid('male', 'female', 'other'),
  avgMark: Joi.number().min(1).max(12),
  onDuty: Joi.boolean(),
});
