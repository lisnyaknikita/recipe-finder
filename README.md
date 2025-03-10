#Recipe Finder

The Recipe Finder App is a Next.js application that allows users to search for recipes based on various criteria, such as ingredients, cuisine type, and preparation time. It fetches data from the Spoonacular API and presents recipes in a visually appealing way. Users can view detailed recipe information, including image and ingredients.

###Architecture
Pages:
- / – Homepage with a search form.
- /recipes – Displays search results.
- /recipes/[id] – Shows details of a selected recipe.

###Components (/components):
- search-form - Search form compoenent in Home page.
- recipes-list - Component for the list of found recipes.
- recipes-loader - Loader component while fetching recipes list.
- recipe-card - Card-component for recipe.
- recipe-details - Component with recipe details.
- search-details-loader - Loader component while fetching recipe details.
- ingredient-list - Component with list of ingredients.
- ingredient-item - Component for items of ingredients list.

###Services (/services):
- fetch-recipes.ts – API logic for fetching recipes.
- fetch-recipe-details.ts – API logic for fetching recipe details.

###Features that due to certain circumstances I didn't have time to do:
- best prectices for responsive design;
- loading handling for recipes images;
- hover animations;
- and better styling.

#####I took the fetch logic out to services, but I could also do it with custom hooks. 

First, install the dependencies

npm install
#### or
yarn install
#### or
pnpm install
#### or
bun install

Second, run the development server:

npm run dev
#### or
yarn dev
#### or
pnpm dev
#### or
bun dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
