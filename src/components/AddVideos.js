import React from "react";
import "./AddVideos.css";
function AddVideos() {
  return (
    <form>
      <input type="text" placeholder="title" />
      <input type="text" placeholder="views" />
      <button
        onClick={() => {
          setVideos([
            ...Videos,
            {
              id: Videos.length + 1,
              title: "Demo Tutorial",
              // channel = "Different flowers from india"
              views: "1.5k",
              time: "20 days ago",
              verified: false,
            },
          ]);
        }}
      >
        Add Videos
      </button>
    </form>
  );
}

export default AddVideos;
