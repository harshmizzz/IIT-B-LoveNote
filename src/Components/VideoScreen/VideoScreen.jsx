import React from "react";
import InstructionVideo from "../../Videos/IntroductoryVideoLoveNote.mp4";
import Upperillustration from "../../Images/VideoScreenImages/Upperillustration.png";
import Bottomillustration from "../../Images/VideoScreenImages/Bottomillustration.png";
import "./VideoScreen.css";

const VideoScreen = () => {
  return (
    <>
      <div>
        <img
          className="videoCoverImg upperImg"
          src={Upperillustration}
          alt=""
        />
        <video controls width="1004" height="504" autoplay muted>
          <source src={InstructionVideo} type="video/mp4" />
        </video>
        <img
          className="videoCoverImg lowerImg" 
          src={Bottomillustration}
          alt=""
        />
      </div>
    </>
  );
};

export default VideoScreen;
