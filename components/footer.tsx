import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-[4vw] w-screen text-[#402B1A] overflow-x-hidden text-[1.1vw] bg-[#F3E8D8]">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <Link href="/" className="flex items-center gap-[1vh]">
            <img
              src="/isslogo.PNG"
              alt="ISS Club Logo"
              className="h-[8vw] rounded-full"
            />
            <span className="text-[4vw] font-black font-goudy line mt-[0.5vw] flex items-center">
              ISS Club
            </span>
          </Link>
          <div className="flex flex-row gap-[12vw]">
            <div className="flex flex-col font-mont gap-[0.5vh]">
              <p className="text-[1.5vw] mb-[1vh] font-medium">Title</p>
              <p>Sublink</p>
              <p>Sublink</p>
              <p>Sublink</p>
            </div>
            <div className="flex flex-col font-mont gap-[0.5vh]">
              <p className="text-[1.5vw] mb-[1vh] font-medium">Title</p>
              <p>Sublink</p>
              <p>Sublink</p>
              <p>Sublink</p>
            </div>
            <div className="flex flex-col font-mont gap-[0.5vh]">
              <p className="text-[1.5vw] mb-[1vh] font-medium">Title</p>
              <p>Sublink</p>
              <p>Sublink</p>
              <p>Sublink</p>
            </div>
          </div>
        </div>
        <div className="bg-[#402B1A] h-[2px] w-full mt-[3vw] mb-[2vw]" />
        <div className="flex flex-row justify-between font-mont font-semibold">
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
