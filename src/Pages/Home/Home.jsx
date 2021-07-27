import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import WhatSpecial from "../../Components/WhatSpecial/WhatSpecial";
import WhatSpecialJson from "../../JsonData/WhatSpecial";
import "./Home.css";
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
    </>
  );
};

export default Home;
