import React from "react";
import EventItem from "./evet-item";

const allEvents = (props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => {
        <EventItem />;
      })}
    </ul>
  );
};

export default allEvents;
