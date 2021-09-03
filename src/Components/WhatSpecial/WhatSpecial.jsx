import React from "react";
import "./WhatSpecial.css";
import img1 from "../../Images/WhatSpecialImgs/Illustration 1.png";
import img2 from "../../Images/WhatSpecialImgs/Illustration 2.png";
import img3 from "../../Images/WhatSpecialImgs/Illustration 3.png";
import Media from "react-media";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/a11y/a11y.scss";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const WhatSpecial = () => {
  return (
    <>
      <Media query={{ maxWidth: 800 }}>
        {(matches) =>
          matches ? (
            <>
              <div className="WhatSpecialBody">
                <h3>WHAT'S SPECIAL ?</h3>
              </div>
              <Swiper
                // install Swiper modules
                modules={[Pagination, A11y]}
                
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <div className="WhatsSpecialContainer">
                    <div className="WhatsSpecialimg">
                      <img src={img1} alt="" />
                    </div>
                    <div className="WhatsSpecialText">
                      <h3>Not working? know it early</h3>
                      <p>
                        Add only thoughful matches in the list and remove the
                        rest-choose your 'the one' better with our detailed
                        profiles and finite matche list.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="WhatsSpecialContainer">
                    <div className="WhatsSpecialimg">
                      <img src={img1} alt="" />
                    </div>
                    <div className="WhatsSpecialText">
                      <h3>Not working? know it early</h3>
                      <p>
                        Add only thoughful matches in the list and remove the
                        rest-choose your 'the one' better with our detailed
                        profiles and finite matche list.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="WhatsSpecialContainer">
                    <div className="WhatsSpecialimg">
                      <img src={img1} alt="" />
                    </div>
                    <div className="WhatsSpecialText">
                      <h3>Not working? know it early</h3>
                      <p>
                        Add only thoughful matches in the list and remove the
                        rest-choose your 'the one' better with our detailed
                        profiles and finite matche list.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </>
          ) : (
            <>
              <div className="WhatSpecialBody">
                <h3>WHAT'S SPECIAL ?</h3>
                <div className="row imageRow">
                  <div className="imgCard column col-lg-4">
                    <img className="WhatSpecialImg" src={img1} alt="" />
                    <h3>Not working? know it early</h3>
                    <p>
                      Add only thoughful matches in the list and remove the
                      rest-choose your 'the one' better with our detailed
                      profiles and finite matche list.
                    </p>
                  </div>
                  <div className="imgCard column col-lg-4">
                    <img className="WhatSpecialImg" src={img2} alt="" />
                    <h3> Helps you choose your "one {"&"} only" </h3>
                    <p>
                      We are with you till the end. By helping you compare all
                      your matches, through different activities {"&"} stages
                    </p>
                  </div>
                  <div className="imgCard column col-lg-4">
                    <img className="WhatSpecialImg" src={img3} alt="" />
                    <h3>We understand your safety</h3>
                    <p>
                      You can now enable or disable the call option with your
                      match whenever you'd like!
                    </p>
                  </div>
                </div>
              </div>
            </>
          )
        }
      </Media>
    </>
  );
};

export default WhatSpecial;
