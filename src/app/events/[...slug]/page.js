"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { getFilteredEvents } from "../../../../dummy-data";

const FilteredEventPage = (props) => {
  const { params } = props;
  const filteredData = params.sluf;
  // const router = useRouter();
  // const filteredData = router.query.page;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }
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

  return <div>Filtered Event</div>;
};

export default FilteredEventPage;
