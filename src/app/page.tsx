'use client';

import { useRouter } from 'next/navigation';

import { SearchForm } from './components/search-form/search-form';

export default function Home() {
  const router = useRouter();

  const handleSearchSubmit = (
    query: string,
    cuisine: string,
    maxTime: string
  ) => {
    const params = new URLSearchParams();

    if (query) params.append('query', query);
    if (cuisine) params.append('cuisine', cuisine);
    if (maxTime) params.append('maxTime', maxTime);

    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-violet-700 p-4">
      <h1 className="text-4xl font-bold mb-6 text-rose-0">Recipe Search</h1>
      <SearchForm onSubmit={handleSearchSubmit} />
    </div>
  );
}
