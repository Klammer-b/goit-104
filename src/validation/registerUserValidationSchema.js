import Joi from 'joi';

export const registerUserValidationSchema = Joi.object({
  name: Joi.string().required().min(2).max(20),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6).max(20),
});
