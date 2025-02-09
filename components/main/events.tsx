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
      className="w-screen h-[130vh] overflow-hidden justify-between flex flex-col bg-[#EBD6B8] p-[4vw]"
      id="events"
    >
      <h2 className=" text-[4vw] font-goudy">Upcoming Events</h2>

      <div className="flex flex-row gap-[2vw] justify-between">
        {events.map((event, index) => (
          <div key={index} className=" rounded bg-[#F3E8D8]">
            <img
              src={event.image}
              alt={event.title}
              className=" w-full rounded object-cover"
            />
            <div className="flex flex-col p-[3vh] font-mont gap-[3vh]">
              <div className="flex flex-col mb-[1vh]">
                <h3 className="text-[1.6vw] font-medium">{event.title}</h3>
                <p className="text-[1.87vh] text-muted">{event.description}</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-[4.5vw] font-mont flex flex-row">
                  <span>{event.date}</span>
                  <div className="flex flex-col text-[1.8vh] justify-center">
                    <span>Sept</span>
                    <span>emb</span>
                    <span>er</span>
                  </div>
                </div>
                <div className="space-y-1 text-sm text-[1vw] font-medium">
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

              <button className="w-full text-[1.15vw] font-bold rounded font-mont border border-[#402B1A] py-2 text-center">
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
