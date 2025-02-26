import { fetchRecipeDetails } from '@/services/fetch-recipe-details';
import { Suspense } from 'react';
import { RecipeDetailsLoader } from './components/recipe-details-loader/recipe-details-loader';
import { RecipeDetails } from './components/recipe-details/recipe-details';

export default async function RecipeDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const recipeDetails = await fetchRecipeDetails(id);

  return (
    <div className="min-h-screen bg-gray-800 p-6 flex flex-col items-center">
      <Suspense fallback={<RecipeDetailsLoader />}>
        <RecipeDetails recipeDetails={recipeDetails} />
      </Suspense>
    </div>
  );
}
