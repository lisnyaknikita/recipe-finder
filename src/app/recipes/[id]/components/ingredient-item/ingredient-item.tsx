type IngredientItemProps = {
  ingredient: { id: number; original: string };
};

export const IngredientItem = ({ ingredient }: IngredientItemProps) => {
  return (
    <li key={ingredient.id} className="text-rose-50">
      {ingredient.original}
    </li>
  );
};
