import { ChevronsDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useIntro } from '@contexts/IntroContext'
import useIntroOpen from '@hooks/useIntroOpen';
import { useTheme } from '@contexts/ThemeContext';

export default function Intro () {
    const { isLight } = useTheme();
    const { isIntroOpen, isIntroAnimate } = useIntro();
    const toggleIntroOpen = useIntroOpen();

    return (
        <div className='intro font-serif border border-gray-500 rounded-md p-6 mb-10 w-full'>
            <h1 className='sr-only'>Mini wiki Pokémon</h1>
            <button className='appearance-none border-none bg-transparent flex items-center justify-center gap-4 w-full' onClick={toggleIntroOpen}>
                <div className={`transition-transform duration-1500 ${isIntroOpen && 'rotate-x-180'}`}>
                    <ChevronsDown color={isLight ? '#1e1d1d' : '#f9fafb'} className={`${isIntroAnimate && (isLight ? 'intro-chevrons-animate-light' : 'intro-chevrons-animate')}`} />
                </div>
                <h2 className='text-xl underline'>Explication du projet</h2>
                <div className={`transition-transform duration-1500 ${isIntroOpen && 'rotate-x-180'}`}>
                    <ChevronsDown color={isLight ? '#1e1d1d' : '#f9fafb'} className={`${isIntroAnimate && (isLight ? 'intro-chevrons-animate-light' : 'intro-chevrons-animate')}`} />
                </div>
            </button>
            <AnimatePresence>
                {isIntroOpen && (
                    <motion.div
                        data-testid='intro-content'
                        className='mt-3'
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                            opacity: 1,
                            height: "auto",
                            transition: {
                                opacity: { delay: 0.25, duration: 2 },
                                height: { duration: 1 },
                            }
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                            transition: {
                                opacity: { delay: 0.5, duration: 0.5 },
                                height: { duration: 1.25, ease: 'easeIn' },
                            }
                        }}
                        
                    >
                        <p className='mb-2'>Ce projet personnel est mon premier en React.js que j'ai totalement conçu par moi-même (avec l'aide de YouTube, Stack Overflow et ChatGPT ponctuellement) sans suivre un exercice provenant d'un cours ou d'une vidéo.</p>
                        <p className='mb-4'>Je l'ai initialement fait en Javascript puis je l'ai migré en TypeScript avec l'ajout de tests.</p>
                        <p className='mb-4'>J'ai pris le parti de créer différents "Contexts" et de créer des "Hooks" et "Utils" même si la taille du projet ne le nécessite pas vraiment. Ça m'a permis d'apprendre comment gérer l'arborescence des fichiers et les relations entre eux comme sur un projet plus complexe et donc plus proche d'un projet en entreprise.</p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: { delay: 0.5, duration: 2 },
                            }}
                            exit={{
                                opacity: 0,
                                transition: { delay: 0.25, duration: 0.5 }
                            }}
                        >
                            <p>Stack technique :</p>
                            <ul className='list-none flex flex-wrap gap-2 justify-center mt-3 mb-5'>
                                <li className="mr-5 before:content-['•'] before:mr-2 before:text-sky-500">React.js</li>
                                <li className="mr-5 before:content-['•'] before:mr-2 before:text-sky-500">Typescript</li>
                                <li className="mr-5 before:content-['•'] before:mr-2 before:text-sky-500">Vite</li>
                                <li className="mr-5 before:content-['•'] before:mr-2 before:text-sky-500">Tailwind CSS</li>
                                <li className="mr-5 before:content-['•'] before:mr-2 before:text-sky-500">DaisyUI</li>
                                <li className="mr-5 before:content-['•'] before:mr-2 before:text-sky-500">API <a href="https://pokeapi.co/" target="_blank" className='text-inherit underline hover:text-amber-300'>Pokeapi.co</a></li>
                                <li className="mr-5 before:content-['•'] before:mr-2 before:text-sky-500">Axios</li>
                                <li className="mr-5 before:content-['•'] before:mr-2 before:text-sky-500">Lucide-react</li>
                                <li className="mr-5 before:content-['•'] before:mr-2 before:text-sky-500">Framer-motion</li>
                                <li className="mr-5 before:content-['•'] before:mr-2 before:text-sky-500">React Testing Library</li>
                                <li className="mr-5 before:content-['•'] before:mr-2 before:text-sky-500">Vitest</li>
                                <li className="mr-5 before:content-['•'] before:mr-2 before:text-sky-500">MSW</li>
                                <li className="mr-5 before:content-['•'] before:mr-2 before:text-sky-500"><a href="https://github.com/RemiPERRINELLE/project-react-api-pokemon/" target="_blank" className='text-inherit underline hover:text-amber-300'>GitHub</a></li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: { delay: 0.75, duration: 2 },
                            }}
                            exit={{
                                opacity: 0,
                                transition: { duration: 0.5 }
                            }}
                        >
                            <h2 className='text-xl mt-10 mb-5 underline'>Vie du projet :</h2>
                            <h3 className='text-lg mb-2'>V1</h3>
                            <ul className='list-none mb-8'>
                                <li className="mb-2 mr-5 before:content-['•'] before:mr-2 before:text-sky-500">Initialisation du projet sur React en Javascript avec Vite + TailwindCSS + DaisyUI</li>
                                <li className="mb-2 mr-5 before:content-['•'] before:mr-2 before:text-sky-500">Mise en production sur mon site internet (serveur OVH).</li>
                                <li className="mb-2 mr-5 before:content-['•'] before:mr-2 before:text-sky-500">Correction d'un bug sur le thème "Light" non existant en préproduction.</li>
                                <li className="mb-2 mr-5 before:content-['•'] before:mr-2 before:text-sky-500">Test du lien par des connaissances et prise en compte leurs retours : passer à 2 cartes par ligne et non 1 sur mobile + mettre les noms des pokémons en français (j'avais laissé en anglais car il y avait moins d'appels d'API).</li>
                            </ul>
                            <h3 className='text-lg mb-2'>V2</h3>
                            <ul className='list-none mb-8'>
                                <li className="mb-2 mr-5 before:content-['•'] before:mr-2 before:text-sky-500">Migration du projet sur Typescript pour apprendre.</li>
                                <li className="mb-2 mr-5 before:content-['•'] before:mr-2 before:text-sky-500">Ajout de tests pour éviter des erreurs lors de la mise en production, ne pas casser le projet existant et également pour apprendre la mise en place de tests.</li>
                            </ul>
                            <h3 className='text-lg mb-2'>V3 actuelle</h3>
                            <ul className='list-none mb-8'>
                                <li className="mb-2 mr-5 before:content-['•'] before:mr-2 before:text-sky-500">Évolution du projet (toujours avec des tests avant la mise en production) : dropdown en introduction de ce pavé d'explications + lien github en haut à gauche de la page + flèche en bas à droite pour remonter en haut sans scroller.</li>
                            </ul>
                            <h3 className='text-lg mb-2'>V4 à venir</h3>
                            <ul className='list-none mb-8'>
                                <li className="mb-2 mr-5 before:content-['•'] before:mr-2 before:text-sky-500">Il y a probablement d'autres fonctionnalités qui vont arriver : filtres + système de recherche.</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}