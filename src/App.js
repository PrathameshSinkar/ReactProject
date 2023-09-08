import Video from "./components/Video";
import VideoDB from "./Data/Data";
import "./App.css";
import PlayButton from "./components/PlayButton";
import Counter from "./components/Counter";
import { useState } from "react";
import AddVideos from "./components/AddVideos";
function App() {
  const [Videos, setVideos] = useState(VideoDB);
  return (
    <div className="App">
      <AddVideos />
      {/* <div>
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
      </div> */}

      {Videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          verified={video.verified}
          id={video.id}
        >
          <div style={{ clear: "both", display: "flex" }}>
            <PlayButton
              onClickPlay={() =>
                console.log(video.title, "Video played successfully.")
              }
              onClickPause={() =>
                console.log(video.title, "Video paused successfully.")
              }
            >
              {video.title}
            </PlayButton>
          </div>
        </Video>
      ))}
      {/* <div style={{ clear: "both", display: "flex" }}>
        <Counter></Counter>
      </div> */}
    </div>
  );
}

export default App;
