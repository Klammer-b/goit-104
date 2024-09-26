export const parseNumber = (value, defaultValue) => {
  if (!value) return defaultValue;

  const parsedValue = Number(value);

  if (Number.isNaN(parsedValue)) return defaultValue;

  return parsedValue;
};
