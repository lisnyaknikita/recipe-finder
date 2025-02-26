const API_KEY = process.env.SPOONACULAR_API_KEY;

export const fetchRecipes = async (
  query?: string,
  cuisine?: string,
  maxTime?: string
) => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?${
    query ? `query=${query}&` : ''
  }${cuisine ? `cuisine=${cuisine}&` : ''}${
    maxTime ? `maxReadyTime=${maxTime}&` : ''
  }apiKey=${API_KEY}`;

  try {
    const response = await fetch(url, { next: { revalidate: 60 } });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};
