import React from "react";
import "./LatestEvents.scss";

const LatestEvents = () => {
  return (
    <div className="latest-events section__padding" id="latestevents">
      <div>
        <h1>Latest Coverage</h1>
      </div>
      <div className="iframe">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/9D9CZKHncK0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default LatestEvents;
