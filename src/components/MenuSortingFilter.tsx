import { useSorting } from "@contexts/SortingContext";


export default function PokemonList() {
    const { isSorted, setIsSorted } = useSorting();

    return(
        <div className="mt-10">
            <ul className="flex flex-wrap gap-6 justify-center">
                <li className="w-40/100 sm:w-fit">
                    <button className={`appearance-none border-none bg-transparent hover:underline p-2 ${!isSorted && 'underline'}`} onClick={() => setIsSorted(0)}>Sans Tri</button>
                </li>
                <li className="w-40/100 sm:w-fit">
                    <button className={`appearance-none border-none bg-transparent hover:underline p-2 ${isSorted === 1 && 'underline'}`} onClick={() => setIsSorted(1)}>Tri A-Z</button>
                </li>
                <li className="w-40/100 sm:w-fit">
                    <button className={`appearance-none border-none bg-transparent hover:underline p-2 ${isSorted === 2 && 'underline'}`} onClick={() => setIsSorted(2)}>Tri Z-A</button>
                </li>
                    <li className="w-40/100 sm:w-fit">
                    <button className={`appearance-none border-none bg-transparent hover:underline p-2 ${isSorted === 3 && 'underline'}`} onClick={() => setIsSorted(3)}>Tri par type</button>
                </li>
            </ul>
        </div>
    ) 
}