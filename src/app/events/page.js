"use client";

import React from "react";
import { getAllEvents } from "../../../dummy-data";
import EventList from "../components/events/event-lists";
import EventSearch from "../components/events/event-search";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const allEvents = getAllEvents();
  const router = useRouter();

  const handleSearch = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <div>
      <EventSearch onSearch={handleSearch} />
      <EventList items={allEvents} />
    </div>
  );
};

export default HomePage;
