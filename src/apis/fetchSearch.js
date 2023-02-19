const fetchPets = async ({ queryKey }) => {
  // eslint-disable-next-line no-unused-vars
  const [_, { animal, location, breed }] = queryKey;
  const response = await fetch(
    `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!response.ok) {
    throw new Error(
      `fetchPets response was not ok => ${animal}, ${location}, ${breed}`
    );
  }

  return response.json();
};

export default fetchPets;
