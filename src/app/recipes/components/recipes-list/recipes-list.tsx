import { fetchRecipes } from '@/services/fetch-recipes';
import { RecipeCard } from '../recipe-card/recipe-card';

type Recipe = {
  id: number;
  title: string;
  image: string;
  imageType: string;
};

export const RecipeList = async ({
  query,
  cuisine,
  maxTime,
}: {
  query?: string;
  cuisine?: string;
  maxTime?: string;
}) => {
  const recipes = await fetchRecipes(query, cuisine, maxTime);

  return (
    <>
      {recipes.length === 0 ? (
        <p className="text-center text-3xl text-rose-300">No recipes found.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe: Recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
            />
          ))}
        </ul>
      )}
    </>
  );
};
