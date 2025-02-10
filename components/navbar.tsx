import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";

import { FaBars, FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className=" absolute max-sm:fixed max-sm:mx-0 max-sm:rounded-none max-sm:w-full max-sm:h-[6vh] top-0 left-0 right-0 z-20 text-[#402B1A]  flex items-center justify-between rounded bg-[#F3E8D8]  backdrop-blur-sm text-[1.9vh] font-mont font-semibold px-[1vw] py-[1vh] mt-[2.7vw] max-sm:mt-0 mx-[4vw]  shadow-xl">
      <Link href="/" className="flex items-center gap-[1vh]">
        <img
          src="/isslogo.PNG"
          alt="ISS Club Logo"
          className="h-[3.6vw] max-sm:h-[4.2vh] rounded-full"
        />
        <span className="text-[2vw] max-sm:text-[2.3vh] font-black font-goudy line max-sm:mt-[0.5vh] mt-[0.5vw] flex items-center">
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

      <div className=" items-center flex flex-row  gap-[2vw] max-sm:gap-[2vh] max-sm:mr-[1vh]">
        <Link href="/" className="">
          <FaSearch className="h-[4vh] max-sm:text-[2.5vh]" />
        </Link>
        <Sheet>
          <SheetTrigger className="hidden max-sm:flex">
            <FaBars className="text-[3vh]" />
          </SheetTrigger>
          <SheetContent className="h-full ">
            <SheetHeader className="h-full">
              <SheetTitle className="text-[#402B1A] font-mont text-[5vh]">
                Navigation
              </SheetTitle>
              <SheetDescription className="h-full p-[2vh] max-sm:text-[3vh] font-semibold font-mont  flex flex-col justify-between items-start bg-[#EBD6B8] text-[#402B1A] ">
                <div className="flex flex-col items-start gap-[2vh]">
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
                <div className="flex flex-col items-start gap-[2vh]">
                  <Link href="/" className="">
                    EN
                  </Link>
                  <Link href="/" className="">
                    APPLY NOW
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Link href="/" className="hidden md:flex">
          EN
        </Link>
        <Link href="/" className="hidden md:flex">
          APPLY NOW
        </Link>
      </div>
    </nav>
  );
}
