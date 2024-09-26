import { parseNumber } from './parseNumber.js';

const BOOLEANS = ['true', 'false'];
const parseBoolean = (value) => {
  if (!BOOLEANS.includes(value)) return;
  return value === 'true' ? true : false;
};

const GENDERS = ['male', 'female', 'other'];
const parseGender = (value) => {
  if (GENDERS.includes(value)) return value;
};

export const parseFilterParams = (query) => {
  return {
    onDuty: parseBoolean(query.onDuty),
    gender: parseGender(query.gender),
    minAge: parseNumber(query.minAge),
    maxAge: parseNumber(query.maxAge),
    minAvgMark: parseNumber(query.minAvgMark),
    maxAvgMark: parseNumber(query.maxAvgMark),
  };
};
