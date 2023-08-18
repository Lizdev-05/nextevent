import React from "react";
import { getAllEvents } from "../../../dummy-data";
import AllEvents from "../components/all-event";

const HomePage = () => {
  const allEvents = getAllEvents();
  return (
    <div>
      <h2>All Events</h2>

      <div>
        <AllEvents events={allEvents} />
      </div>
    </div>
  );
};

export default HomePage;
