import { groq } from "next-sanity";

// Get all events
export const eventsQuery = groq`*[_type == "event"] | order(eventDate desc) {
  _id,
  eventName,
  eventDate,
  description
}`;

// Get a single event by ID
export const eventByIdQuery = (
  id: string
) => groq`*[_type == "event" && _id == "${id}"][0] {
  _id,
  eventName,
  eventDate,
  description
}`;

// Get upcoming events
export const upcomingEventsQuery = groq`*[_type == "event" && eventDate > now()] | order(eventDate asc) {
  _id,
  eventName,
  eventDate,
  description
}`;

// Get past events
export const pastEventsQuery = groq`*[_type == "event" && eventDate < now()] | order(eventDate desc) {
  _id,
  eventName,
  eventDate,
  description
}`;
