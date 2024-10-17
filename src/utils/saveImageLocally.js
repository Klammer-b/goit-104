import fs from 'node:fs/promises';
import path from 'node:path';
import { UPLOAD_PATH } from '../constants/path.js';
import { env } from './env.js';
import { ENV_VARS } from '../constants/index.js';

export const saveImageLocally = async (file) => {
  const { path: oldPath, filename } = file;
  const newPath = path.join(UPLOAD_PATH, 'images', filename);

  await fs.rename(oldPath, newPath);

  return `${env(ENV_VARS.BACKEND_DOMAIN)}/files/${filename}`;
};
