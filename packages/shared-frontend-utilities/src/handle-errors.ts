export const handleErrors = async (resp: Response) => {
  const result = await resp.json();
  if (resp.status !== 200) {
    throw result;
  }
  return result;
};
