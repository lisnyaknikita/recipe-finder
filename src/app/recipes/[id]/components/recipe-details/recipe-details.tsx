import Image from 'next/image';

type Ingredient = {
  id: number;
  original: string;
};

type RecipeDetailsType = {
  id: number;
  title: string;
  image: string;
  extendedIngredients: Ingredient[];
};

export const RecipeDetails = async ({
  recipeDetails,
}: {
  recipeDetails: RecipeDetailsType;
}) => {
  return (
    <>
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
          {recipeDetails.extendedIngredients?.map((ingredient: Ingredient) => (
            <li key={ingredient.id} className="text-gray-700">
              {ingredient.original}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
