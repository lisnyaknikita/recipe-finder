import { Suspense } from 'react';
import { RecipeList } from './components/recipes-list/recipes-list';
import { RecipesLoader } from './components/recipes-loader/recipes-loader';

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; cuisine?: string; maxTime?: string }>;
}) {
  const { query, cuisine, maxTime } = await searchParams;

  return (
    <div className="min-h-screen bg-gray-600 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Recipes</h1>
      <Suspense fallback={<RecipesLoader />}>
        <RecipeList query={query} cuisine={cuisine} maxTime={maxTime} />
      </Suspense>
    </div>
  );
}
