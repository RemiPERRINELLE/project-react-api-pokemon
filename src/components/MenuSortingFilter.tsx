import { useSorting } from "@contexts/SortingContext";
import { useFilter } from "@contexts/FilterContext";

export default function PokemonList() {
    const { isSorted, setIsSorted } = useSorting();
    const { isFiltered, setIsFiltered } = useFilter();

    return(
        <div className="mt-10 flex justify-center items-center gap-10">
            <ul className="hidden sm:flex sm:flex-wrap sm:gap-6 sm:justify-center">
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
            <div className="dropdown sm:hidden">
                <div tabIndex={0} role="button" className="btn sm:appearance-none sm:border-none border-gray-600 bg-transparent sm:shadow-none hover:underline text-inherit text-base">Tris</div>
                <ul tabIndex={0} className="dropdown-content menu rounded-md z-1 w-[150px] sm:w-52 p-2 shadow-sm shadow-gray-500" style={{backgroundColor: 'var(--color-background)'}}>
                    <li>
                        <button className={`appearance-none border-none bg-transparent hover:underline p-2 ${!isSorted && 'underline'}`} onClick={e => {setIsSorted(0); e.currentTarget.blur();}}>Sans Tri</button>
                    </li>
                    <li>
                        <button className={`appearance-none border-none bg-transparent hover:underline p-2 ${isSorted === 1 && 'underline'}`} onClick={e => {setIsSorted(1); e.currentTarget.blur();}}>Tri A-Z</button>
                    </li>
                    <li>
                        <button className={`appearance-none border-none bg-transparent hover:underline p-2 ${isSorted === 2 && 'underline'}`} onClick={e => {setIsSorted(2); e.currentTarget.blur();}}>Tri Z-A</button>
                    </li>
                    <li>
                        <button className={`appearance-none border-none bg-transparent hover:underline p-2 ${isSorted === 3 && 'underline'}`} onClick={e => {setIsSorted(3); e.currentTarget.blur();}}>Tri par type</button>
                    </li>
                </ul>
            </div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn sm:appearance-none sm:border-none border-gray-600 bg-transparent sm:shadow-none hover:underline text-inherit text-base">Filtre par type</div>
                <ul tabIndex={0} className="dropdown-content menu rounded-md z-1 w-[150px] sm:w-52 p-2 shadow-sm shadow-gray-500" style={{backgroundColor: 'var(--color-background)'}}>
                    <li>
                        <button className={`appearance-none border-none bg-transparent hover:underline p-2 text-inherit ${isFiltered === 0 && 'underline'}`} onClick={e => {setIsFiltered(0); e.currentTarget.blur();}}>Tous</button>
                    </li>
                    <li>
                        <button className={`appearance-none border-none bg-transparent hover:underline p-2 text-inherit ${isFiltered === 1 && 'underline'}`} onClick={e => {setIsFiltered(1); e.currentTarget.blur();}}>Normal</button>
                    </li>
                    <li>
                        <button className={`appearance-none border-none bg-transparent hover:underline p-2 text-inherit ${isFiltered === 2 && 'underline'}`} onClick={e => {setIsFiltered(2); e.currentTarget.blur();}}>Plante</button>
                    </li>
                    <li>
                        <button className={`appearance-none border-none bg-transparent hover:underline p-2 text-inherit ${isFiltered === 3 && 'underline'}`} onClick={e => {setIsFiltered(3); e.currentTarget.blur();}}>Feu</button>
                    </li>
                    <li>
                        <button className={`appearance-none border-none bg-transparent hover:underline p-2 text-inherit ${isFiltered === 4 && 'underline'}`} onClick={e => {setIsFiltered(4); e.currentTarget.blur();}}>Eau</button>
                    </li>
                </ul>
            </div>
        </div>
    ) 
}