import React from "react";
import InstructionVideo from "../../Videos/IntroductoryVideoLoveNote.mp4";
import Upperillustration from "../../Images/VideoScreenImages/Upperillustration.png";
import Bottomillustration from "../../Images/VideoScreenImages/Bottomillustration.png";
import "./VideoScreen.css";
import Media from "react-media";
import { Fragment } from "react";
const VideoScreen = () => {
  return (
    <>
      <div className="videoscreen">
        <img
          className="videoCoverImg upperImg"
          src={Upperillustration}
          alt=""
        />
        <div className="VideoWrapper">
          <Media query={{ maxWidth: 800 }}>
            {(matches) =>
              matches ? (
                <>
                  <video controls width="330" height="400" muted>
                    <source src={InstructionVideo} type="video/mp4" />
                  </video>
                </>
              ) : (
                <>
                  <video controls width="900" height="504" muted>
                    <source src={InstructionVideo} type="video/mp4" />
                  </video>
                </>
              )
            }
          </Media>
        </div>

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
