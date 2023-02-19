const fetchBreedList = async ({ queryKey }) => {
  // eslint-disable-next-line no-unused-vars
  const [_, animal] = queryKey;

  if (!animal) return [];

  const res = await fetch(`https://pets-v2.dev-apis.com/breeds?animal=${animal}`);

  if (!res.ok) {
    throw new Error(`details/${animal} fetch not ok`);
  }

  return res.json();
};

export default fetchBreedList;
