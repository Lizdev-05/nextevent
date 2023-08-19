"use client";
import React from "react";
import { getFilteredEvents } from "../../../../dummy-data";
import EventList from "@/app/components/events/event-lists";
import ResultsTitle from "@/app/components/ui/results-title/results-title";

const FilteredEventPage = (props) => {
  const { params } = props;
  const filteredData = params.slug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }
  console.log(filteredData);
  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <p className="center">Invalid Filter. Kindly adjust your input...</p>
    );
  }

  const filteredEvent = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvent || filteredEvent === 0) {
    return <p className="center">No event found for the chosen filter</p>;
  }

  return (
    <div>
      <ResultsTitle />
      <EventList items={filteredEvent} />
    </div>
  );
};

export default FilteredEventPage;
