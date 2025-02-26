import Image from 'next/image';
import Link from 'next/link';

type TImage = {
  id: number;
  title: string;
  image: string;
  imageType: string;
};

const API_KEY = process.env.SPOONACULAR_API_KEY;

async function fetchRecipes(
  query?: string,
  cuisine?: string,
  maxTime?: string
) {
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
}

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; cuisine?: string; maxTime?: string }>;
}) {
  const { query, cuisine, maxTime } = await searchParams;

  const recipes = await fetchRecipes(query, cuisine, maxTime);

  return (
    <div className="min-h-screen bg-gray-600 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Recipes</h1>
      {recipes.length === 0 ? (
        <p className="text-center text-white">No recipes found.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe: TImage) => (
            <li
              key={recipe.id}
              className="block bg-slate-900 p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <Link href={`/recipes/${recipe.id}`}>
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md text-white"
                />
                <h2 className="text-lg font-semibold mt-2">{recipe.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
