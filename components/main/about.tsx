export default function About() {
  return (
    <section className="w-screen h-[120vh] overflow-hidden flex flex-col bg-[#F3E8D8] p-[4vw]">
      <h2 className=" text-[4vw] font-goudy max-sm:text-[4vh] max-sm:font-semibold">
        About Us
      </h2>

      <div className="flex flex-row justify-between font-mont  max-sm:flex-col max-sm:items-center max-sm:gap-[3vh]">
        <div className="flex flex-col h-full max-sm:w-full w-[40%] justify-between gap-[2vw] items-start">
          <img
            src="/aboutuslogo.PNG"
            alt="ISS Logo"
            className="h-[65vh] max-sm:h-fit max-sm:w-full object-contain"
          />
          <p className="font-semibold text-[2vw] max-sm:text-center max-sm:text-[2.2vh] font-semibold">
            &ldquo;Et viverra ut odio vulputate. Ligula velit dui dictum
            phasellus at. Quisque eros bibendum faucibus morbi velit.&rdquo;
          </p>
        </div>

        <div className="w-[57%] max-sm:w-full flex flex-col max-sm:flex-col-reverse  max-sm:gap-[2vh] justify-between">
          <div className="flex flex-col justify-between max-sm:gap-[1vh]">
            <h3 className="text-[2vw] font-semibold max-sm:text-[1.95vh]">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p className="text-[1.15vw] max-sm:text-[1.4vh]">
              Lorem ipsum dolor sit amet consectetur. Et viverra ut odio
              vulputate. Ligula velit dui dictum phasellus at. Quisque eros
              bibendum faucibus morbi velit. Porta morbi tellus cras ac pulvinar
              aliquam. Consequat cursus arcu mattis nisi consectetur. Sed ut et
              nibh magnis scelerisque cras. Aenean ipsum id sem egestas elit
              imperdiet odio ac. Auctor justo sed libero varius id quis vitae
              velit. Condimentum odio turpis nunc aliquam elementum et velit
              pulvinar. Habitant in id vel metus etiam. Augue eget nullam purus
              dictum sapien nisi.
            </p>
          </div>

          <div className="grid w-full gap-4 max-sm:gap-[4vw] sm:grid-cols-2 h-fit max-sm:flex max-sm:flex-row">
            <img
              src="/aboutus1.PNG"
              alt="About Image 1"
              className=" rounded object-cover w-full max-sm:w-[44vw]"
            />
            <img
              src="/aboutus2.PNG"
              alt="About Image 2"
              className=" rounded object-cover w-full max-sm:w-[44vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
