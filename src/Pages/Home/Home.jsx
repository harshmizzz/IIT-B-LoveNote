import React, { lazy, Suspense } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import WhatSpecial from "../../Components/WhatSpecial/WhatSpecial";
import "./Home.css";
import Media from "react-media";
import HamburgerBox from "../../Components/Navbar/Hamburger";
import { CircularProgress } from "@material-ui/core";
import Footer2 from "../../Components/Footer2/Footer2";
const VideoScreen = lazy(() =>
  import("../../Components/VideoScreen/VideoScreen")
);
const VerticalCarousel = lazy(() =>
  import("../../Components/VerticalCarousel/VerticalCarousel")
);
const BirthLoveNote = lazy(() =>
  import("../../Components/BirthLoveNote/BirthLoveNote")
);
const Excited = lazy(() => import("../../Components/Footer/Footer"));
// const VideoScreen = lazy(() => import());
const Home = () => {
  return (
    <>
      <Media query={{ maxWidth: 800 }}>
        {(matches) => (matches ? <HamburgerBox /> : <Navbar hideBG={false} />)}
      </Media>
      <Suspense
        fallback={
          <div className="LoadingScreen">
            <CircularProgress color="disabled" />
            <p>Loading...</p>
          </div>
        }
      >
        <div className="homeBody">
          <WhatSpecial />
        </div>
        <div className="videoBody" id="About">
          <VideoScreen />
        </div>
        <VerticalCarousel />
        <BirthLoveNote />
        <Excited />
        <Footer2 />
      </Suspense>
    </>
  );
};

export default Home;
