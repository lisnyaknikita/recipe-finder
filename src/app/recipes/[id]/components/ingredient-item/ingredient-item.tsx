type IngredientItemProps = {
  ingredient: { id: number; original: string };
};

export const IngredientItem = ({ ingredient }: IngredientItemProps) => {
  return (
    <li key={ingredient.id} className="text-gray-700">
      {ingredient.original}
    </li>
  );
};
