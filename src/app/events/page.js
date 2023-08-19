import React from "react";
import { getAllEvents } from "../../../dummy-data";
import EventList from "../components/events/event-lists";
import FilteredEvent from "../components/events/event-search";

const HomePage = () => {
  const allEvents = getAllEvents();
  return (
    <div>
      <FilteredEvent />
      <EventList items={allEvents} />
    </div>
  );
};

export default HomePage;
