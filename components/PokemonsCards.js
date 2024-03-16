import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PokemonCard from "./PokemonCard";

function PokemonsCards() {
  return (
    <main className="p-4 max-w-full">
      <div className="w-full flex gap-5 justify-between items-center mx-auto">
        <button className="bg-[#30A7D7] text-white px-20 py-2 rounded-md hover:bg-[#1B82B1] duration-300 transition-all">
          <h2 className="text-xl">Surprise Me!</h2>
        </button>
        <div className="flex">
          <div className="flex justify-between items-center gap-3">
            <h2 className="text-lg text-[#A4A4A4] font-normal">Sort by</h2>
            <div className="flex justify-between items-center bg-[#313131] text-white px-10 py-2 rounded-md">
              <div className="flex ">
                <Image src="/logo.png" alt="logo" width={25} height={25} />
                <p>Lowest Number(first)</p>
              </div>
              <div>v</div>
            </div>
          </div>
        </div>
      </div>
      <PokemonCard />
    </main>
  );
}

export default PokemonsCards;
