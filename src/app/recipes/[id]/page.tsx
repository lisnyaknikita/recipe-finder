import Image from 'next/image';

const API_KEY = process.env.SPOONACULAR_API_KEY;

async function fetchRecipeDetails(id: string) {
  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
}

export default async function RecipeDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const recipeDetails = await fetchRecipeDetails(id);

  console.log(recipeDetails);

  return (
    <div className="min-h-screen bg-gray-800 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-4">
        {recipeDetails.title}
      </h1>

      {recipeDetails.image && (
        <Image
          src={recipeDetails.image}
          alt={recipeDetails.title}
          width={500}
          height={300}
          className="rounded-lg shadow-lg mb-6"
        />
      )}

      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc pl-5 space-y-2">
          {recipeDetails.extendedIngredients?.map((ingredient) => (
            <li key={ingredient.id} className="text-gray-700">
              {ingredient.original}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
