import React from "react";

const UpcomingEvents = () => {
  return (
    <div
      className=" lg:w-1/5 rounded-lg bg-gray-900 md:w-1/2 px-5 py-5  bg-white overflow-hidden mb-5	"
      style={{
        height: "1%",
        position: "-webkit-sticky",
        position: "sticky",
        top: "0",
      }}
    >
      <h1 className="text-2xl	text-center pb-5">Upcoming Events</h1>
      <p>
        {" "}
        The Astronomy club tries to bring out the inner astronomer that has been
        hiding inside for so long. We have three major visions for the club:
        Through our workshops and night sessions we wish to build up curiosity
        and knowledge about the universe around us. Getting the astronomy
      </p>
    </div>
  );
};

export default UpcomingEvents;
