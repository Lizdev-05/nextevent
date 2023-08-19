import React from "react";
import { getAllEvents } from "../../../dummy-data";
import EventList from "../components/events/event-lists";

const HomePage = () => {
  const allEvents = getAllEvents();
  return (
    <div>
      <EventList items={allEvents} />
    </div>
  );
};

export default HomePage;
