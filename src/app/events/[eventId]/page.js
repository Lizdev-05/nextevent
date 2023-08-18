"use client";
import React from "react";
import { getEventById } from "../../../../dummy-data";
import EventDetail from "@/app/components/event-detail";

const EventDetails = (props) => {
  const { params } = props;
  const eventId = params.eventId;
  console.log(eventId);
  if (!eventId) {
    return <p>Event not found.</p>;
  }
  const event = getEventById(eventId);

  return <EventDetail detail={event} />;
};

export default EventDetails;
