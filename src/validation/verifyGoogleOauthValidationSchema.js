import Joi from 'joi';

export const verifyGoogleOauthValidationSchema = Joi.object({
  code: Joi.string().required(),
});
