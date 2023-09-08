import React from "react";
import myFlower from "../images/Parijat.png";
import "./Video.css";

function Video({
  title,
  channel = "Different flowers from india",
  views,
  time,
  verified,
  id,
  children,
}) {
  return (
    <div className="Container">
      <div className="pic">
        <img className="EditCSS" src={myFlower} alt="Rose" />
      </div>
      <div className="title"> {title}</div>

      <div>
        <div className="channel">
          {channel} {verified && "✅"}
        </div>
      </div>

      <div className="views">
        {views}
        <span>views</span> {time}
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Video;
