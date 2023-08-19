"use client";
import React from "react";
import { getEventById } from "../../../../dummy-data";
import EventDetail from "@/app/components/events/event-detail";
import ResultsTitle from "@/app/components/ui/results-title/results-title";
import ErrorAlert from "@/app/components/ui/error-alert/error-alert";

const EventDetails = (props) => {
  const { params } = props;
  const eventId = params.eventId;

  const event = getEventById(eventId);

  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p>Event not found.</p>
        </ErrorAlert>
        <ResultsTitle />
      </>
    );
  }

  return <EventDetail detail={event} />;
};

export default EventDetails;
