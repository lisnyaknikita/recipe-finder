'use client';

import { FormEvent, useState } from 'react';

const cuisines = ['British', 'American', 'Chinese'];

type SearchFormProps = {
  onSubmit: (query: string, cuisine: string, maxTime: string) => void;
};

export const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const [query, setQuery] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [maxTime, setMaxTime] = useState('');

  const isButtonEnabled = query || cuisine || maxTime;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(query, cuisine, maxTime);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-[400px]"
    >
      <input
        type="text"
        placeholder="Enter recipe query"
        className="border rounded p-2 w-full mb-3 text-black"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        className="border rounded p-2 w-full mb-3 text-black"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
      >
        <option value="">Select cuisine</option>
        {cuisines.map((cuisine) => (
          <option key={cuisine} value={cuisine}>
            {cuisine}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Maximum preparation time in minutes"
        className="border rounded p-2 w-full mb-3 text-black"
        value={maxTime}
        onChange={(e) => setMaxTime(e.target.value)}
      />
      <button
        className={`px-6 py-2 rounded text-xl text-black transition-colors ${
          isButtonEnabled ? 'bg-sky-500 hover:bg-sky-600' : 'bg-gray-400'
        }`}
        disabled={!isButtonEnabled}
      >
        Next
      </button>
    </form>
  );
};
