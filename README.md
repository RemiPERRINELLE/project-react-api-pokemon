Ce projet personnel est mon premier en React.js que j'ai totalement conçu par moi-même (avec l'aide de ChatGPT, Stack Overflow et YouTube) sans suivre un exercice provenant d'un cours ou d'une vidéo.

Je l'ai initialement fait en Javascript puis je l'ai migré en TypeScript avec l'ajout d'un environnement de tests.

Stack technique :
- React.js
- Typescript
- Vite
- Tailwind CSS
- API Pokeapi.co
- Axios
- Lucide-react
- Framer-motion
- React Testing Library
- Vitest
- MSW
- Github

J'ai pris parti de créer différents "Contexts" et de créer des "Hooks" et "Utils" même si la taille du projet ne le nécessite pas vraiment. Ça m'a permis d'apprendre comment gérer l'arborescence des fichiers et les relations entre eux comme sur un projet plus complexe et donc plus proche d'un projet en entreprise.
Idem pour le typage typescript, j'ai typé les props dans chaque context plutôt que de l'importer depuis un fichier externe pour adopter une approche plus adaptative pour un projet important en équipe (dans le cas où on souhaite ajouter une props en plus de "children: ReactNode" pour un context spécifique).