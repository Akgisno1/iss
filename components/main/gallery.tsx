import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Gallery() {
  const images = [
    "/gallery1.PNG",
    "/gallery2.PNG",
    "/gallery345.PNG",
    "/gallery345.PNG",
    "/gallery345.PNG",
    "/gallery6.PNG",
  ];

  return (
    <section
      className="w-screen h-[130vh] overflow-hidden justify-between flex flex-col bg-[#F3E8D8] p-[4vw]"
      id="gallery"
    >
      <h2 className=" text-[4vw] font-goudy">Gallery</h2>

      <div className="grid gap-[2vw]  grid-cols-4">
        <img
          src={images[0]}
          alt="Gallery image 1"
          className=" w-full rounded object-cover"
        />

        <img
          src={images[1]}
          alt="Gallery image 2"
          className=" w-full col-span-2 rounded object-cover"
        />

        <img
          src={images[2]}
          alt="Gallery image 3"
          className=" w-full rounded object-cover"
        />
        <img
          src={images[3]}
          alt="Gallery image 4"
          className=" w-full rounded object-cover"
        />
        <img
          src={images[4]}
          alt="Gallery image 5"
          className="w-full rounded object-cover"
        />

        <img
          src={images[5]}
          alt="Gallery image 6"
          className="col-span-2 w-full rounded object-cover"
        />
      </div>

      <div className="text-[1.9vh] flex justify-center">
        <Link
          href="/gallery"
          className="rounded-full border items-center flex flex-row font-mont font-semibold py-[0.5vh] px-[1.5vh] gap-[1.5vh] border-[#402B1A]"
        >
          <p>VIEW ALL</p> <FaArrowRightLong />
        </Link>
      </div>
    </section>
  );
}
