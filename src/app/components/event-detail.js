import React from "react";
import { getAllEvents } from "../../../dummy-data";

const EventDetail = () => {
  return <div>{getAllEvents.map(deta)}</div>;
};

export default EventDetail;
