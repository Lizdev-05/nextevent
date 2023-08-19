"use client";
import React from "react";
import { getFilteredEvents } from "../../../../dummy-data";
import EventList from "@/app/components/events/event-lists";
import ResultsTitle from "@/app/components/ui/results-title/results-title";
import ErrorAlert from "@/app/components/ui/error-alert/error-alert";

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
      <>
        <ErrorAlert>
          <p>Invalid Filter. Kindly adjust your input...</p>
        </ErrorAlert>
        <ResultsTitle />
      </>
    );
  }

  const filteredEvent = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvent || filteredEvent === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No event found for the chosen filter</p>
        </ErrorAlert>
        <ResultsTitle />
      </>
    );
  }

  return (
    <div>
      <ResultsTitle />
      <EventList items={filteredEvent} />
    </div>
  );
};

export default FilteredEventPage;
