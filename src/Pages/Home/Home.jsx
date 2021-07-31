import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import WhatSpecial from "../../Components/WhatSpecial/WhatSpecial";
import WhatSpecialJson from "../../JsonData/WhatSpecial";
import "./Home.css";
import VideoScreen from "../../Components/VideoScreen/VideoScreen";

const Home = () => {
  // tried to fetch images from json file
  function createWhatSpecialCards({ id, title, info }) {
    return <WhatSpecial key={id} title={title} info={info} />;
  }

  return (
    <>
      <Navbar />
      <div className="homeBody">
        <WhatSpecial />
      </div>
      <div className="videoBody">
        <VideoScreen />
      </div>
    </>
  );
};

export default Home;
