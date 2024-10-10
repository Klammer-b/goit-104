import fs from 'node:fs';
import path from 'node:path';
import Handlebars from 'handlebars';
import { TEMPLATES_PATH } from '../constants/path.js';

const template = fs
  .readFileSync(path.join(TEMPLATES_PATH, 'reset-password-email.html'))
  .toString();

export const generateResetPasswordEmail = ({ name, resetLink }) => {
  const handlebarsTemplate = Handlebars.compile(template);

  return handlebarsTemplate({ name, resetLink });
};
