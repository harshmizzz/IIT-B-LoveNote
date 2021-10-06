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
                    <div className="VerticalTopNumber">1</div>
                    <div className="VerticalTopContent">
                      <div className="VerticalImageLeftTop">
                        <p>A PERSON IS MORE THAN JUST A FACE</p>
                      </div>
                      <div className="VerticalImageMiddle">
                        <p>
                          So much detail! You can now see them through images,
                          hear them through audio stories and understand if you
                          are similar (or not!) through our common questions
                          It’s as if you are actually interacting with the
                          person in real life, before matching
                        </p>
                      </div>
                      <div className="VerticalImageBottom">
                        <p>So that you can choose your ONE & ONLY wisely !</p>
                      </div>
                    </div>
                  </div>
                  <div className="VerticalImageRight">
                    <img src={img11} alt="Home1" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="VerticalImageContainer">
                  <div className="VerticalImageLeft">
                    <div className="VerticalTopNumber">1</div>
                    <div className="VerticalTopContent">
                      <div className="VerticalImageLeftTop">
                        <p>A PERSON IS MORE THAN JUST A FACE</p>
                      </div>
                      <div className="VerticalImageMiddle">
                        <p>
                          So much detail! You can now see them through images,
                          hear them through audio stories and understand if you
                          are similar (or not!) through our common questions
                          It’s as if you are actually interacting with the
                          person in real life, before matching
                        </p>
                      </div>
                      <div className="VerticalImageBottom">
                        <p>So that you can choose your ONE & ONLY wisely !</p>
                      </div>
                    </div>
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
                <div className="VerticalTopNumber">2</div>
                <div className="VerticalTopContent">
                  <div className="VerticalImageLeftTop">
                    <p>PENNY FOR YOUR THOUGHTS?</p>
                  </div>
                  <div className="VerticalImageMiddle">
                    <p>
                      Ask questions important to you and vice versa before
                      mutual matching!
                    </p>
                  </div>
                  <div className="VerticalImageBottom">
                    <p>Get to know if they are “your type” before you match!</p>
                  </div>
                </div>
              </div>
              <div className="VerticalImageRight">
                <img src={img2} alt="Home2" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="VerticalImageContainer">
              <div className="VerticalImageLeft">
                <div className="VerticalTopNumber">3</div>
                <div className="VerticalTopContent">
                  <div className="VerticalImageLeftTop">
                    <p>SPILL SOME TEA...</p>
                  </div>
                  <div className="VerticalImageMiddle">
                    <p>
                      Know each other’s escapades, incidents, gossips, stories,
                      and more, daily. This fun activity keeps you updated and
                      engaged in their lifes. Don’t worry, we don’t forget
                      privacy. You can stop sharing your facts with anyone, any
                      time.
                    </p>
                  </div>
                  <div className="VerticalImageBottom">
                    <p>Determine a book by its story!</p>
                  </div>
                </div>
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
                    <div className="VerticalTopNumber">4</div>
                    <div className="VerticalTopContent">
                      <div className="VerticalImageLeftTop">
                        <p>THOUGH ‘CALL’</p>
                      </div>
                      <div className="VerticalImageMiddle">
                        <p>
                          You like your match, but think it’s too soon for them
                          to call you? Don’t worry! You can enable or disable
                          audio and video calls whenever you want. We care about
                          your safety
                        </p>
                      </div>
                      <div className="VerticalImageBottom">
                        <p>No rush! Move at your own pace</p>
                      </div>
                    </div>
                  </div>
                  <div className="VerticalImageRight">
                    <img src={img42} alt="home42" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="VerticalImageContainer">
                  <div className="VerticalImageLeft">
                    <div className="VerticalTopNumber">4</div>
                    <div className="VerticalTopContent">
                      <div className="VerticalImageLeftTop">
                        <p>THOUGH ‘CALL’</p>
                      </div>
                      <div className="VerticalImageMiddle">
                        <p>
                          You like your match, but think it’s too soon for them
                          to call you? Don’t worry! You can enable or disable
                          audio and video calls whenever you want. We care about
                          your safety
                        </p>
                      </div>
                      <div className="VerticalImageBottom">
                        <p>No rush! Move at your own pace</p>
                      </div>
                    </div>
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
                <div className="VerticalTopNumber">5</div>
                <div className="VerticalTopContent">
                  <div className="VerticalImageLeftTop">
                    <p>CALL THE SHOTS. WHO DO YOU CHOOSE?</p>
                  </div>
                  <div className="VerticalImageMiddle">
                    <p>
                      We help you compare each of your matches and realise who
                      are you closest to. Play different activities and set
                      stage for each of your companionship.
                    </p>
                  </div>
                  <div className="VerticalImageBottom">
                    <p>
                      Understand your match and where your companionship is
                      going, to choose better.
                    </p>
                  </div>
                </div>
              </div>
              <div className="VerticalImageRight">
                <img src={img5} alt="Home2" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="VerticalImageContainer">
              <div className="VerticalImageLeft">
                <div className="VerticalTopNumber">6</div>
                <div className="VerticalTopContent">
                  <div className="VerticalImageLeftTop">
                    <p>MULTI LAYER AUTHENTICATION</p>
                  </div>
                  <div className="VerticalImageMiddle">
                    <p>
                      Only the best would reach you! Every profile would be
                      examined twice and and the most authentic and complete
                      profile would be extended to you. Enjoy a safe platform :)
                    </p>
                  </div>
                  <div className="VerticalImageBottom">
                    <p>For a safer and carefree companion search!</p>
                  </div>
                </div>
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
                    <div className="VerticalTopNumber">7</div>
                    <div className="VerticalTopContent">
                      <div className="VerticalImageLeftTop">
                        <p>SOMETHING LOOKS FISHY? REPORT IT!</p>
                      </div>
                      <div className="VerticalImageMiddle">
                        <p>
                          Report any inappropriate message freely, one click and
                          we will handle the rest!Healthy text? Mark it safe!
                        </p>
                      </div>
                      <div className="VerticalImageBottom">
                        <p></p>
                      </div>
                    </div>
                  </div>
                  <div className="VerticalImageRight">
                    <img src={img71} alt="Home2" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="VerticalImageContainer">
                  <div className="VerticalImageLeft">
                    <div className="VerticalTopNumber">7</div>
                    <div className="VerticalTopContent">
                      <div className="VerticalImageLeftTop">
                        <p>SOMETHING LOOKS FISHY? REPORT IT!</p>
                      </div>
                      <div className="VerticalImageMiddle">
                        <p>
                          Report any inappropriate message freely, one click and
                          we will handle the rest!Healthy text? Mark it safe!
                        </p>
                      </div>
                      <div className="VerticalImageBottom">
                        <p></p>
                      </div>
                    </div>
                  </div>
                  <div className="VerticalImageRight">
                    <img src={img72} alt="Home2" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="VerticalImageContainer">
                  <div className="VerticalImageLeft">
                    <div className="VerticalTopNumber">7</div>
                    <div className="VerticalTopContent">
                      <div className="VerticalImageLeftTop">
                        <p>SOMETHING LOOKS FISHY? REPORT IT!</p>
                      </div>
                      <div className="VerticalImageMiddle">
                        <p>
                          Report any inappropriate message freely, one click and
                          we will handle the rest!Healthy text? Mark it safe!
                        </p>
                      </div>
                      <div className="VerticalImageBottom">
                        <p></p>
                      </div>
                    </div>
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
                <div className="VerticalTopNumber">8</div>
                <div className="VerticalTopContent">
                  <div className="VerticalImageLeftTop">
                    <p> QUICKER TO FIND YOUR “FOREVER”</p>
                  </div>
                  <div className="VerticalImageMiddle">
                    <p>
                      Our finite matches helps you avoid blind swipping so that
                      it doesn’t take you forever to meet your “forever”.{" "}
                    </p>
                  </div>
                </div>
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
