import React from "react";

const AllEvents = (props) => {
  const { events } = props;
  return (
    <div>
      {events.map((singleEvent) => {
        return (
          <div>
            <img src={singleEvent.image} alt={singleEvent.title} />
            <div>
              <div>
                <h2>{singleEvent.title}</h2>
              </div>
              <div>{singleEvent.date}</div>
              <div>{singleEvent.address}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllEvents;
