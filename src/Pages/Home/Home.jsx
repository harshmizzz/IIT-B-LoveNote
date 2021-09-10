import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import WhatSpecial from "../../Components/WhatSpecial/WhatSpecial";
import WhatSpecialJson from "../../JsonData/WhatSpecial";
import "./Home.css";
import VideoScreen from "../../Components/VideoScreen/VideoScreen";
import VerticalCarousel from "../../Components/VerticalCarousel/VerticalCarousel";
import BirthLoveNote from "../../Components/BirthLoveNote/BirthLoveNote";
import Excited from "../../Components/Footer/Footer";
import Media from "react-media";
import HamburgerBox from "../../Components/Navbar/Hamburger";
const Home = () => {
  return (
    <>
      <Media query={{ maxWidth: 800 }}>
        {(matches) => (matches ? <HamburgerBox /> : <Navbar hideBG={false} />)}
      </Media>

      <div className="homeBody">
        <WhatSpecial />
      </div>
      <div className="videoBody">
        <VideoScreen />
      </div>
      <VerticalCarousel />
      <BirthLoveNote />
      <Excited />
    </>
  );
};

export default Home;
