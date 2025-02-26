import { IngredientItem } from '../ingredient-item/ingredient-item';

type Ingredient = {
  id: number;
  original: string;
};

type IngredientListProps = {
  ingredients: Ingredient[];
};

export const IngredientList = ({ ingredients }: IngredientListProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full">
      <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
      <ul className="list-disc pl-5 space-y-2">
        {ingredients.map((ingredient) => (
          <IngredientItem key={ingredient.id} ingredient={ingredient} />
        ))}
      </ul>
    </div>
  );
};
