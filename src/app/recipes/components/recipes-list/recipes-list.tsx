import { fetchRecipes } from '@/services/fetch-recipes';
import Image from 'next/image';
import Link from 'next/link';

type TImage = {
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
    </>
  );
};
