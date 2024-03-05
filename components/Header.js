import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 transition-all duration-300 hover:drop-shadow hover:-translate-y-1	"
    >
      <Image src="/logo.png" alt="logo" width={25} height={25} />
      <h1 className="text-start text-4xl text-yellowMain font-medium">
        Poke'dex
      </h1>
    </Link>
  );
}

export default Header;
