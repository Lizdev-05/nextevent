import React from "react";
import { getFeaturedEvents } from "../../dummy-data";
import EventList from "./components/event-lists";

const page = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default page;
