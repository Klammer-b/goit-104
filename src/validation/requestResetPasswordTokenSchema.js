import Joi from 'joi';

export const requestResetPasswordTokenValidationSchema = Joi.object({
  email: Joi.string().required().email(),
});
