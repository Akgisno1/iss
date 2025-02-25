export default function Newsletter() {
  return (
    <section className=" m-[4vw] h-[92vh] w-[92vw] overflow-hidden justify-between flex flex-col bg-[#F3E8D8]  relative rounded">
      <div className="imagediv absolute top-0 left-0 right-0 bottom-0  z-0 rounded">
        <img
          src="/news.jpg"
          alt="Newsletter Image"
          className="w-full max-sm:h-full rounded object-cover"
        />
      </div>
      <div className="textdiv relative w-full h-full flex items-center justify-center flex-col   text-[#F3E8D8]  z-10">
        <h2 className=" text-[4vw] max-sm:text-[4vh] font-goudy  font-bold">
          Newsletter
        </h2>
        <h3 className="text-[4vw] max-sm:text-[4vh] font-goudy  font-bold">
          Stay Updated with ISS
        </h3>
        <p className="font-mont text-[1.5vw] max-sm:text-[2vh]  max-sm:text-center font-bold">
          Lorem ipsum dolor sit amet consectetur. Et viverra ut odio vulputate.
        </p>

        <div className=" flex flex-row font-mont text-[1.15vw] mt-[2.5vw] max-sm:text-[2vh]">
          <input
            type="email"
            placeholder="Email"
            className="w-[33vw] text-[#402B1A] max-sm:w-[50vw] py-[1.5vh] px-[2vh] border-[#402B1A] border bg-[#F3E8D8] rounded-l-[2.5vh] text-left placeholder:text-[#402B1A] font-semibold"
          />
          <button className="w-[15vw] max-sm:w-[25vw] border-[#402B1A] font-semibold bg-[#402B1A] text-center rounded-r-[2.5vh] text-[#F3E8D8]">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
