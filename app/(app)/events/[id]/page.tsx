import React from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import { eventByIdQuery } from "@/sanity/lib/queries";
import { Event } from "@/types/event";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}
export const revalidate = 30;

const EventPage = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const event = await sanityFetch<Event>({
    query: eventByIdQuery(resolvedParams.id),
  });

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <main className="p-[4vw] pt-[9vw] max-sm:pt-[7vh] min-h-screen flex flex-col gap-[0.5vw] text-[#402B1A] bg-[#F3E8D8] max-sm:gap-[0.5vh]">
      <h2 className="text-[2.2vw] font-mont font-medium max-sm:text-[3vh] max-sm:font-semibold">
        {event.eventName}
      </h2>
      <div className="bg-[#402B1A] h-[0.3vh] w-full mb-[1vw] max-sm:mt-[1vh]" />
      <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-[1vw] max-sm:gap-[1vh] max-sm:mt-[1vh]">
        {[...Array(24)].map((_, index) => (
          <img
            key={index}
            src={"/hero2.jpg"}
            alt={`Event ${index + 1}`}
            className="w-full rounded"
          />
        ))}
      </div>
    </main>
  );
};

export default EventPage;
