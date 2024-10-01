import { parseNumber } from './parseNumber.js';

export const validatePaginationParams = (query) => {
  const page = parseNumber(query.page, 1);
  const perPage = parseNumber(query.perPage, 10);

  return {
    page,
    perPage,
  };
};
