import Link from "next/link";

import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className=" absolute max-sm:fixed top-0 left-0 right-0 z-10 text-[#402B1A]  flex items-center justify-between rounded bg-[#F3E8D8]  backdrop-blur-sm text-[1.9vh] font-mont font-semibold px-[1vw] py-[1vh] mt-[2.7vw] max-sm:mt-0 mx-[4vw]  shadow-xl">
      <Link href="/" className="flex items-center gap-[1vh]">
        <img
          src="/isslogo.PNG"
          alt="ISS Club Logo"
          className="h-[3.6vw] rounded-full"
        />
        <span className="text-[2vw] font-black font-goudy line mt-[0.5vw] flex items-center">
          ISS Club
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-[1.5vw]">
        <Link href="/" className="hover:text-[2.5vh] ">
          HOME
        </Link>
        <Link href="/events" className="hover:text-[2.5vh] ">
          EVENTS
        </Link>
        <Link href="/gallery" className="hover:text-[2.5vh] ">
          GALLERY
        </Link>
        <Link href="/" className="hover:text-[2.5vh] ">
          GAMES
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-[2vw]">
        <Link href="/" className="">
          <FaSearch className="h-[4vh] " />
        </Link>
        <Link href="/" className="">
          EN
        </Link>
        <Link href="/" className="">
          APPLY NOW
        </Link>
      </div>
    </nav>
  );
}
