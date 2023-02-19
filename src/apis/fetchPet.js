const fetchPet = async ({ queryKey }) => {
  // eslint-disable-next-line no-unused-vars
  const [_, id] = queryKey;

  const response = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!response.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return response.json();
};

export default fetchPet;
