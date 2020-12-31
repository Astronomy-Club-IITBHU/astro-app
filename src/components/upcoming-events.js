import { info } from "autoprefixer";
import React from "react";

const upcomingEventData = {
  Info: " Website release of Astronomy Club IIT BHU ",
  Date: " 1-Jan-2021 ",
  Time: " 0:00 AM ",
  img_path: "upcomingNews.jpg", //relative path inside images folder has to be provided
};

const eventData = () => {
  if (
    upcomingEventData.Info !== "" &&
    upcomingEventData.Date !== "" &&
    upcomingEventData.Time !== ""
  ) {
    return (
      <div className="shadow-md">
        <p className="font-light text-center">{upcomingEventData.Info}</p>
        <p className="grid grid-cols-2">
          <span className="text-center font-semibold text-xl ">Date:</span>
          <span className="text-center text-md">{upcomingEventData.Date}</span>
        </p>
        <p className="grid grid-cols-2">
          <span className="text-center font-semibold text-xl">Time:</span>
          <span className="text-center text-md">{upcomingEventData.Time}</span>
        </p>
      </div>
    );
  }
  return (
    <div>
      <p className="italic my-2 text-sm text-center">No Upcoming Events</p>
    </div>
  );
};
const provideImage = () => {
  if (upcomingEventData.img_path !== "") {
    return (
      <img src={require("../../images/" + upcomingEventData.img_path)}></img>
    );
  }
  return <img src={require("../../images/Logo.jpg")}></img>;
};
const UpcomingEvents = () => {
  return (
    <div
      className=" lg:w-1/5 rounded-lg bg-gray-900 md:w-1/2 px-5 py-5 mx-5 bg-white overflow-hidden mb-5	"
      style={{
        height: "1%",
        position: "-webkit-sticky",
        position: "sticky",
        top: "0",
      }}
    >
      <h1 className="text-2xl	text-center pb-5">Upcoming Events</h1>
      <p>
        {
          <div className="pt-2 pb-4 border-white border px-2 border-opacity-25 bg-gray-400 text-black rounded-sm">
            {provideImage()}
            {eventData()}
          </div>
        }
        The Astronomy club tries to bring out the inner astronomer that has been
        hiding inside for so long. We have three major visions for the club:
        Through our workshops and night sessions we wish to build up curiosity
        and knowledge about the universe around us. Getting the astronomy
      </p>
    </div>
  );
};

export default UpcomingEvents;
