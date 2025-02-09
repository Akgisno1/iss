export default function About() {
  return (
    <section className="w-screen h-[120vh] overflow-hidden flex flex-col bg-[#F3E8D8] p-[4vw]">
      <h2 className=" text-[4vw] font-goudy">About Us</h2>

      <div className="flex flex-row justify-between font-mont ">
        <div className="flex flex-col h-full w-[40%] justify-between gap-[2vw] items-start">
          <img
            src="/aboutuslogo.PNG"
            alt="ISS Logo"
            className="h-[65vh] object-contain"
          />
          <p className="font-semibold text-[2vw] ">
            &ldquo;Et viverra ut odio vulputate. Ligula velit dui dictum
            phasellus at. Quisque eros bibendum faucibus morbi velit.&rdquo;
          </p>
        </div>

        <div className="w-[57%] flex flex-col justify-between">
          <div className="flex flex-col justify-between">
            <h3 className="text-[2vw] font-semibold">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p className="text-[1.15vw] ">
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

          <div className="grid gap-4 sm:grid-cols-2 h-fit">
            <img
              src="/aboutus1.PNG"
              alt="About Image 1"
              className=" rounded object-cover w-full"
            />
            <img
              src="/aboutus2.PNG"
              alt="About Image 2"
              className=" rounded object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
