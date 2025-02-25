import React from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import { eventsQuery } from "@/sanity/lib/queries";

import AllEvents from "@/components/AllEvents";
import { Event } from "@/types/event";
export const revalidate = 30;
const EventsPage = async () => {
  const events = await sanityFetch<Event[]>({ query: eventsQuery });

  return (
    <main className=" p-[4vw] pt-[10vw] max-sm:pt-[7vh] min-h-screen bg-[#F3E8D8]">
      <AllEvents events={events} />
    </main>
  );
};

export default EventsPage;
