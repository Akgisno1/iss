import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-[4vw] w-screen text-[#402B1A] overflow-x-hidden text-[1.1vw] max-sm:text-[1vh] bg-[#F3E8D8]">
      <div className="flex flex-col">
        <div className="flex flex-row  justify-between max-sm:items-center">
          <Link
            href="/"
            className="flex items-center max-sm:flex-col gap-[1vh]"
          >
            <img
              src="/isslogo.PNG"
              alt="ISS Club Logo"
              className="h-[8vw] max-sm:h-[8vh] rounded-full"
            />
            <span className="text-[4vw] max-sm:text-[3vh] font-black font-goudy line mt-[0.5vw] flex items-center">
              ISS Club
            </span>
          </Link>
          <div className="flex flex-row gap-[12vw]  max-sm:justify-between">
            <div className="flex flex-col font-mont gap-[0.5vh] ">
              <p className="text-[1.5vw] max-sm:text-[2vh] mb-[1vh] font-medium">
                Title
              </p>
              <p>Sublink</p>
              <p>Sublink</p>
              <p>Sublink</p>
            </div>
            <div className="flex flex-col font-mont gap-[0.5vh]">
              <p className="text-[1.5vw] max-sm:text-[2vh] mb-[1vh] font-medium">
                Title
              </p>
              <p>Sublink</p>
              <p>Sublink</p>
              <p>Sublink</p>
            </div>
            <div className="flex flex-col font-mont gap-[0.5vh]">
              <p className="text-[1.5vw] max-sm:text-[2vh] mb-[1vh] font-medium">
                Title
              </p>
              <p>Sublink</p>
              <p>Sublink</p>
              <p>Sublink</p>
            </div>
          </div>
        </div>
        <div className="bg-[#402B1A] h-[2px] w-full mt-[3vw] mb-[2vw]" />
        <div className="flex flex-row max-sm:flex-col max-sm:gap-[1vh] justify-between font-mont font-semibold">
          <div className="flex flex-row gap-[3vw]">
            <p className="underline">Instagram</p>
            <p className="underline">Youtube</p>
            <p className="underline">X</p>
            <p className="underline">Tiktok</p>
          </div>
          <div className="flex flex-row gap-[3vw]">
            <p className="underline">Privacy & Policy</p>
            <p className="underline">Terms & Condition</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
