import React from "react";
import { getAllEvents } from "../../../dummy-data";
import EventList from "../components/event-lists";

const HomePage = () => {
  const allEvents = getAllEvents();
  return (
    <div>
      <h1>All Events</h1>

      <div>
        <EventList items={allEvents} />
      </div>
    </div>
  );
};

export default HomePage;
