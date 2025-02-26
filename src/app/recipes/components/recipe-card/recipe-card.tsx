import Image from 'next/image';
import Link from 'next/link';

type RecipeCardProps = {
  id: number;
  title: string;
  image: string;
};

export const RecipeCard = ({ id, title, image }: RecipeCardProps) => {
  return (
    <li className="block bg-slate-900 p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <Link href={`/recipes/${id}`}>
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-md text-white"
        />
        <h2 className="text-lg font-semibold mt-2">{title}</h2>
      </Link>
    </li>
  );
};
