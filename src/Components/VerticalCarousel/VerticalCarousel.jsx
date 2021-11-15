import React from "react";
import "./VerticalCarousel.css";
import img12 from "../../Images/HomeImg/step 1.2.png";
import img11 from "../../Images/HomeImg/step 1.1.png";
import img2 from "../../Images/HomeImg/step 2.png";
import img3 from "../../Images/HomeImg/step 3.png";
import img41 from "../../Images/HomeImg/step 4.1.png";
import img42 from "../../Images/HomeImg/step 4.2.png";
import img5 from "../../Images/HomeImg/step 5.png";
import img6 from "../../Images/HomeImg/step 6.png";
import img71 from "../../Images/HomeImg/step 7.1.png";
import img72 from "../../Images/HomeImg/step 7.2.png";
import img73 from "../../Images/HomeImg/step 7.3.png";
import img8 from "../../Images/HomeImg/step 8.png";
import img91 from "../../Images/HomeImg/step 9.1.png";
import img92 from "../../Images/HomeImg/step 9.2.png";
import img93 from "../../Images/HomeImg/step 9.3.png";
import img94 from "../../Images/HomeImg/step 9 .4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Mousewheel,
  Pagination,
  A11y,
} from "swiper";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";
SwiperCore.use([EffectFade, Mousewheel, Autoplay, Pagination, A11y]);

function VerticalCarousel() {
  return (
    <>
      <div className="VerticalCarousel">
        <p className="VerticalCarouselHeading">How does it work?</p>
        <Swiper
          modules={[Autoplay, Pagination, A11y, EffectFade]}
          slidesPerView={1}
          effect={"fade"}
          mousewheel={true}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            800: {
              direction: "vertical",
            },
          }}
        >
          <SwiperSlide>
            <Swiper
              slidesPerView={1}
              effect={"fade"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                800: {
                  direction: "vertical",
                },
              }}
            >
              <SwiperSlide>
                <div className="VerticalImageContainer">
                  <div className="VerticalImageLeft">
                    <p>
                      Why should your{" "}
                      <span className="VerticalImageLeft1"> CURIOSITY </span>{" "}
                      stop at their name? Get deeper into their life story, hear
                      them out
                    </p>
                  </div>
                  <div className="VerticalImageRight">
                    <img src={img11} alt="Home1" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="VerticalImageContainer">
                  <div className="VerticalImageLeft">
                    <p>
                      Why should your{" "}
                      <span className="VerticalImageLeft1"> CURIOSITY </span>{" "}
                      stop at their name? Get deeper into their life story, hear
                      them out
                    </p>
                  </div>
                  <div className="VerticalImageRight">
                    <img src={img12} alt="Home1" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
          <SwiperSlide>
            <div className="VerticalImageContainer">
              <div className="VerticalImageLeft">
                <p>
                  Nothing stops you from asking them{" "}
                  <span className="VerticalImageLeftLight"> WHAT </span> is on
                  your <span className="VerticalImageLeft1"> MIND </span> , so
                  ask to match!
                </p>
              </div>
              <div className="VerticalImageRight">
                <img src={img2} alt="Home2" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="VerticalImageContainer">
              <div className="VerticalImageLeft">
                <p>
                  Halloween is long gone,{" "}
                  <span className="VerticalImageLeftBold"> NO MORE </span>{" "}
                  <span className="VerticalImageLeft1"> GHOSTING </span> for
                  you! Now share interesting stories of yourself and let
                  constant notification from their chat do the talking
                </p>
              </div>

              <div className="VerticalImageRight">
                <img src={img3} alt="home3" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Swiper
              slidesPerView={1}
              effect={"fade"}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                800: {
                  direction: "vertical",
                },
              }}
            >
              <SwiperSlide>
                <div className="VerticalImageContainer">
                  <div className="VerticalImageLeft">
                    <p>
                      Too soon to call?
                      <p>
                        Enable or disable calls on your{" "}
                        <span className="VerticalImageLeftBold"> CHOICE </span>
                      </p>
                    </p>
                  </div>
                  <div className="VerticalImageRight">
                    <img src={img42} alt="home42" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="VerticalImageContainer">
                  <div className="VerticalImageLeft">
                    <p>
                      Too soon to call?
                      <p>
                        Enable or disable calls on your{" "}
                        <span className="VerticalImageLeftBold"> CHOICE </span>
                      </p>
                    </p>
                  </div>
                  <div className="VerticalImageRight">
                    <img src={img41} alt="home41" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
          <SwiperSlide>
            <div className="VerticalImageContainer">
              <div className="VerticalImageLeft">
                <p>
                  Confused, who is your{" "}
                  <span className="VerticalImageLeftLight"> “perfect” </span>?
                  We’ll help you find them. Set stages and those activities find
                  your soulmate for you
                </p>
              </div>
              <div className="VerticalImageRight">
                <img src={img5} alt="Home2" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="VerticalImageContainer">
              <div className="VerticalImageLeft">
                <p>
                  <span className="VerticalImageLeftBold">
                    {" "}
                    Multi layer authentication!{" "}
                  </span>
                  Enjoy a safe platform as we only show you verified users
                </p>
              </div>
              <div className="VerticalImageRight">
                <img src={img6} alt="Home2" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Swiper
              slidesPerView={1}
              effect={"fade"}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <div className="VerticalImageContainer">
                  <div className="VerticalImageLeft">
                    <p>
                      {" "}
                      Somethig looks fishy?{" "}
                      <span className="VerticalImageLeft1"> REPORT IT! </span>
                      And we take care of the rest
                    </p>
                  </div>
                  <div className="VerticalImageRight">
                    <img src={img71} alt="Home2" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="VerticalImageContainer">
                  <div className="VerticalImageLeft">
                    <p>
                      {" "}
                      Somethig looks fishy?{" "}
                      <span className="VerticalImageLeft1"> REPORT IT! </span>
                      And we take care of the rest
                    </p>
                  </div>
                  <div className="VerticalImageRight">
                    <img src={img72} alt="Home2" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="VerticalImageContainer">
                  <div className="VerticalImageLeft">
                    <p>
                      {" "}
                      Somethig looks fishy?{" "}
                      <span className="VerticalImageLeft1"> REPORT IT! </span>
                      And we take care of the rest
                    </p>
                  </div>
                  <div className="VerticalImageRight">
                    <img src={img73} alt="Home2" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
          <SwiperSlide>
            <div className="VerticalImageContainer">
              <div className="VerticalImageLeft">
                <p>
                  QUICKER TO FIND YOUR{" "}
                  <span className="VerticalImageLeft1"> “FOREVER”</span>? Our
                  finite matches helps you avoid blind swiping so that it{" "}
                  <span className="VerticalImageLeftBold"> doesn’t take </span>
                  you forever to meet your “forever”
                </p>
              </div>
              <div className="VerticalImageRight">
                <img src={img8} alt="Home2" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Swiper
              slidesPerView={1}
              modules={[EffectFade]}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              effect={"fade"}
              breakpoints={{
                800: {
                  direction: "vertical",
                },
              }}
            >
              <SwiperSlide>
                <div className="VerticalFullImageContainer">
                  <img className="VerticalFullImage" src={img93} alt="home9" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="VerticalFullImageContainer">
                  <img className="VerticalFullImage" src={img94} alt="home9" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="VerticalImageContainer">
                  <img className="VerticalFullImage" src={img91} alt="home9" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="VerticalFullImageContainer">
                  <img className="VerticalFullImage" src={img92} alt="home9" />
                </div>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default VerticalCarousel;
