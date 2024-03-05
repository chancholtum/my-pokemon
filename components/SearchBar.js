import Image from "next/image";

function SearchBar() {
  return (
    <>
      <section className="max-w-full bg-grayMain">
        <div className="p-4 w-full">
          <div className="flex text-start gap-2 w-full">
            <div className="text-white w-full">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl">Name or Number</h2>
                <div className="flex item-center gap-6">
                  <input
                    type="text"
                    name="info"
                    id="indo"
                    className="py-1 px-2 border-2 border-grayShades rounded-md w-3/4 text-grayMain text-lg"
                  />
                  <button className="p-3 bg-orangeMain rounded-md transition-all duration-300 hover:bg-orangeTints">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </button>
                </div>
                <p className="font-light	">
                  Use the Advanced Search to explore Pokemon by type, weakness,
                  Ability, and more!
                </p>
              </div>
            </div>
            <div className="w-full mt-2 ">
              <div className="bg-greenMain p-4 rounded-md">
                <p className="text-white text-xl">
                  Search for a Poke’mon by name or using its National Poke’dex
                  number.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-full bg-grayShades flex justify-center items-center gap-2 py-4 ">
        <p className="text-white font-light cursor-pointer">
          Show Advanced Search
        </p>
        <Image src="/logo.png" alt="logo" width={25} height={25} />
      </div>
    </>
  );
}

export default SearchBar;
