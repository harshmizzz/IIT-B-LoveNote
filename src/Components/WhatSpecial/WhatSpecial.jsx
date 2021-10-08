import React from "react";
import "./WhatSpecial.css";
import img1 from "../../Images/WhatSpecialImgs/Illustration1.png";
import img2 from "../../Images/WhatSpecialImgs/Illustration2.png";
import img3 from "../../Images/WhatSpecialImgs/Illustration3.png";
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
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.5586 16.4609L16.5586 26.4609L6.55859 16.4609"
                    stroke="#EBE7E6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M26.5586 6.46094L16.5586 16.4609L6.55859 6.46094"
                    stroke="#EBE7E6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

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
                      <h3>Gauge a person, your own way!</h3>
                      <p>
                        We have a surprise for you! You can now ask whatever you
                        always wanted to ask strangers, before adding them to
                        your bracket!
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="WhatsSpecialContainer">
                    <div className="WhatsSpecialimg">
                      <img src={img2} alt="" />
                    </div>
                    <div className="WhatsSpecialText">
                      <h3>Forgo the incompatible</h3>
                      <p>
                        Select a few admirables, remove the unsuitable to avoid
                        the wild goose chase
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="WhatsSpecialContainer">
                    <div className="WhatsSpecialimg">
                      <img src={img3} alt="" />
                    </div>
                    <div className="WhatsSpecialText">
                      <h3>On the safer side...</h3>
                      <p>
                        Verified users, verified users, verified all the way! oh
                        what a relief it is to enable and disable calls on your
                        way
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </>
          ) : (
            <>
              <div className="WhatSpecialBody">
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.5586 16.4609L16.5586 26.4609L6.55859 16.4609"
                    stroke="#EBE7E6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M26.5586 6.46094L16.5586 16.4609L6.55859 6.46094"
                    stroke="#EBE7E6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <h3>WHAT'S SPECIAL ?</h3>
                <div className="row imageRow">
                  <div className="imgCard column col-lg-4">
                    <img className="WhatSpecialImg" src={img1} alt="" />
                    <h3>Gauge a person, your own way!</h3>
                    <p>
                      We have a surprise for you! You can now ask whatever you
                      always wanted to ask strangers, before adding them to your
                      bracket!
                    </p>
                  </div>
                  <div className="imgCard column col-lg-4">
                    <img className="WhatSpecialImg" src={img2} alt="" />
                    <h3>Forgo the incompatible</h3>
                    <p>
                      Select a few admirables, remove the unsuitable to avoid
                      the wild goose chase
                    </p>
                  </div>
                  <div className="imgCard column col-lg-4">
                    <img className="WhatSpecialImg" src={img3} alt="" />
                    <h3>On the safer side...</h3>
                    <p>
                      Verified users, verified users, verified all the way! oh
                      what a relief it is to enable and disable calls on your
                      way
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
