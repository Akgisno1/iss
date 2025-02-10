import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

import { FaArrowRightLong, FaClock } from "react-icons/fa6";

export default function Events() {
  const events = [
    {
      title: "Et viverra odio vulputate.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Et viverra ut odio vulputate. Ligula velit dui dictum phasellus at. Quisque eros bibendum faucibus morbi velit. Porta mo...",
      date: "28",
      location: "Conference Room, Berkeley",
      time: "12:00 PM - 02:00 PM",
      image: "/event1.PNG",
    },
    {
      title: "Et viverra odio vulputate.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Et viverra ut odio vulputate. Ligula velit dui dictum phasellus at. Quisque eros bibendum faucibus morbi velit. Porta mo...",
      date: "28",
      location: "Conference Room, Berkeley",
      time: "12:00 PM - 02:00 PM",
      image: "/event1.PNG",
    },
    {
      title: "Et viverra odio vulputate.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Et viverra ut odio vulputate. Ligula velit dui dictum phasellus at. Quisque eros bibendum faucibus morbi velit. Porta mo...",
      date: "28",
      location: "Conference Room, Berkeley",
      time: "12:00 PM - 02:00 PM",
      image: "/event1.PNG",
    },
  ];

  return (
    <section
      className="w-screen h-[130vh] max-sm:h-[135vh] overflow-hidden justify-between max-sm:items-start flex flex-col bg-[#EBD6B8] p-[4vw]  max-sm:w-full"
      id="events"
    >
      <h2 className=" text-[4vw] font-goudy max-sm:text-[4vh] max-sm:font-semibold">
        Upcoming Events
      </h2>

      <div className="flex flex-row max-sm:flex-col  max-sm:gap-[2vh] gap-[2vw] justify-between max-sm:w-full rounded">
        {events.map((event, index) => (
          <div key={index} className=" rounded  bg-[#F3E8D8]">
            <img
              src={event.image}
              alt={event.title}
              className=" w-full max-sm:h-[15vh] rounded object-cover"
            />
            <div className="flex flex-col p-[3vh] max-sm:p-[1vh] font-mont gap-[3vh] max-sm:gap-[1vh]">
              <div className="flex flex-col mb-[1vh] max-sm:mb-0">
                <h3 className="text-[1.6vw] font-medium max-sm:text-[2vh]">
                  {event.title}
                </h3>
                <p className="text-[1.87vh] max-sm:hidden">
                  {event.description}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-[4.5vw] max-sm:text-[6vh] font-mont flex flex-row">
                  <span>{event.date}</span>
                  <div className="flex flex-col text-[1.8vh] max-sm:text-[1.5vh] justify-center">
                    <span>Sept</span>
                    <span>emb</span>
                    <span>er</span>
                  </div>
                </div>
                <div className="space-y-1 text-sm text-[1vw] font-medium items-center">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="h-[4vh]" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock />
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>

              <button className="w-full text-[1.15vw] font-bold rounded font-mont border border-[#402B1A] py-2 text-center max-sm:text-[2vh] ">
                RSVP
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-[1.9vh] flex justify-center">
        <Link
          href="/events"
          className="rounded-full border items-center flex flex-row font-mont font-semibold py-[0.5vh] px-[1.5vh] gap-[1.5vh] border-[#402B1A]"
        >
          <p>SEE ALL EVENTS</p> <FaArrowRightLong />
        </Link>
      </div>
    </section>
  );
}
