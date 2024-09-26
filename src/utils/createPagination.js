export const createPaginationData = (count, page, perPage) => {
  const totalPages = Math.ceil(count / perPage);
  const hasNext = page < totalPages;
  const hasPrevious = page > 1 && (page < totalPages || page === totalPages);

  return {
    totalItems: count,
    totalPages,
    perPage,
    page,
    hasNext,
    hasPrevious,
  };
};
