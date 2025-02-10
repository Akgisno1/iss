"use client";
import React, { useState } from "react";

import { BiPlus } from "react-icons/bi";
import Link from "next/link";
import type { Event } from "@/types/event";
import { usePathname } from "next/navigation";

const AllEvents = ({ events }: { events: Event[] }) => {
  const [selectedYear, setSelectedYear] = useState<string>("2025");
  const filteredEvents = events.filter(
    (event) =>
      new Date(event.eventDate).getFullYear().toString() === selectedYear
  );

  const getDayOfWeek = (date: Date): string => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[date.getDay()];
  };

  const getMonth = (date: Date): string => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[date.getMonth()];
  };

  const months = Array.from(
    new Set(filteredEvents.map((event) => new Date(event.eventDate).getMonth()))
  );
  const pathname = usePathname();
  return (
    <div className=" text-[#402B1A] bg-[#F3E8D8]">
      <div className="flex flex-row items-baseline justify-between  max-sm:flex-col">
        <h2 className="text-[4vw] max-sm:text-[4vh] font-goudy max-sm:font-semibold">
          {pathname === "/events" ? "Past Events" : "Gallery"}
        </h2>
        <div className="flex flex-row gap-[1vw]">
          {Array.from(
            new Set(
              events.map((event) =>
                new Date(event.eventDate).getFullYear().toString()
              )
            )
          ).map((year) => {
            return (
              <div
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`rounded-full border items-center flex flex-row font-mont font-semibold py-[0.5vh] px-[1.5vw] max-sm:px-[1.5vh] cursor-pointer ${
                  year === selectedYear
                    ? "bg-[#402B1A] text-[#F3E8D8] text-[2vh] max-sm:text-[2.5vw]"
                    : "border-[#402B1A] text-[2vh] max-sm:text-[2.5vw]"
                }`}
              >
                {year}
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-[#402B1A] h-[0.3vh] w-full mb-[1vw] max-sm:mt-[1vh]" />
      <div className="flex flex-col gap-[1vw]">
        {months.map((month) => {
          const monthEvents = filteredEvents.filter(
            (event) => new Date(event.eventDate).getMonth() === month
          );
          return (
            <div
              key={month}
              className="rounded w-full flex flex-col gap-[1vw] max-sm:gap-[1vh]"
            >
              <h3 className="text-[1.75vw] font-medium max-sm:text-[2vh] ">
                {getMonth(new Date(monthEvents[0].eventDate))}
              </h3>
              {monthEvents.map((event) => {
                const date = new Date(event.eventDate);
                return (
                  <Link
                    href={`/events/${event._id}`}
                    key={event._id}
                    className="rounded w-full hover:text-[#F3E8D8] hover:bg-[#402B1A] border-[0.3vh] border-[#402B1A] p-[1.5vw] max-sm:pr-[1.5vh]"
                  >
                    <div className=" relative flex flex-row items-center gap-[2.5vw] max-sm:gap-[2.3vh]">
                      <div className="flex flex-col gap-0 items-center w-[6vw] max-sm:w-[9vh] pl-[1.5vw]">
                        <p className="text-[4vw] max-sm:text-[4vh] font-medium">
                          {date.getDate()}
                        </p>
                        <p className="text-[1vw] max-sm:text-[1vh] font-medium font-mont">
                          {getDayOfWeek(date)}
                        </p>
                      </div>
                      <div className="absolute left-[6.5vw] max-sm:left-[6.6vh] max-sm:-top-[1.3vh] -top-[2.3vw] text-[7vw] max-sm:text-[6vh] font-extralight h-full">
                        |
                      </div>
                      <div className="flex flex-row justify-between w-full items-center">
                        <div className="text-[2.5vw] font-medium">
                          <div className="max-sm:flex-col flex">
                            <p className="max-sm:text-[2vh]">
                              {event.eventName}
                            </p>
                            <span className="max-sm:hidden"> : </span>
                            <p className="max-sm:text-[1.5vh]">
                              {event.description}
                            </p>
                          </div>
                        </div>
                        <p className="border-[0.3vh] p-[0.5vw] border-[#402B1A] rounded-full flex">
                          <BiPlus className="text-[2.5vw] max-sm:text-[2.5vh]" />
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllEvents;
