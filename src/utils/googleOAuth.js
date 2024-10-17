import { OAuth2Client } from 'google-auth-library';
import fs from 'node:fs';
import path from 'node:path';
import { env } from './env.js';
import { ENV_VARS } from '../constants/index.js';
import createHttpError from 'http-errors';

const googleConfigPath = path.join(process.cwd(), 'google.json');

const googleOauthParams = JSON.parse(
  fs.readFileSync(googleConfigPath).toString(),
);

const oauthClient = new OAuth2Client({
  projectId: googleOauthParams.web.project_id,
  clientId: env(ENV_VARS.GOOGLE_OAUTH_CLIENT_ID),
  clientSecret: env(ENV_VARS.GOOGLE_OAUTH_SECRET),
  redirectUri: env(ENV_VARS.GOOGLE_OAUTH_REDIRECT_URI),
});

export const generateOAuthLink = () => {
  return oauthClient.generateAuthUrl({
    access_type: 'offline',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ],
  });
};

export const verifyCode = async (code) => {
  try {
    const { tokens } = await oauthClient.getToken(code);
    const idToken = tokens.id_token;

    const ticket = await oauthClient.verifyIdToken({ idToken });

    return ticket.payload;
  } catch (err) {
    console.log(err);

    if (err.status === 400) {
      throw createHttpError(err.status, 'Token is invalid');
    }
    throw createHttpError(500, 'Something is wrong with Google Oauth!');
  }
};
