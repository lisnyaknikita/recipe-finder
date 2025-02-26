import Image from 'next/image';
import { IngredientList } from '../ingredient-list/ingredient-list';

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
      <h1 className="text-rose-50 text-3xl font-bold text-center mb-4">
        {recipeDetails.title}
      </h1>
      {recipeDetails.image && (
        <Image
          src={recipeDetails.image}
          alt={recipeDetails.title}
          width={600}
          height={400}
          className="rounded-lg shadow-lg mb-6"
        />
      )}
      <IngredientList ingredients={recipeDetails.extendedIngredients} />
    </>
  );
};
