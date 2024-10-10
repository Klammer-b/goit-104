import nodemailer from 'nodemailer';
import { env } from './env.js';
import { ENV_VARS } from '../constants/index.js';

export const emailClient = nodemailer.createTransport({
  host: env(ENV_VARS.SMTP_HOST),
  port: env(ENV_VARS.SMTP_PORT),
  secure: false, // true for port 465, false for other ports
  auth: {
    user: env(ENV_VARS.SMTP_USERNAME),
    pass: env(ENV_VARS.SMTP_PASSWORD),
  },
});
