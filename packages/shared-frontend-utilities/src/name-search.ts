export const getDataThatContainsSearchTerm = <T extends { name: string }>(
  searchTerm: string | undefined,
  data: T[] | undefined
) => data && data.filter(({ name }) => (
  !searchTerm || name.toLowerCase().includes(searchTerm)
));
