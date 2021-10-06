import React, { useEffect } from "react";
import "./Profile.css";
import ClearIcon from "@material-ui/icons/Clear";
import ReplayIcon from "@material-ui/icons/Replay";
import ShareIcon from "@material-ui/icons/Share";
import Mic from "@material-ui/icons/Mic";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import TranslateOutlinedIcon from "@material-ui/icons/TranslateOutlined";
import LockIcon from "@material-ui/icons/Lock";
import HeightOutlinedIcon from "@material-ui/icons/HeightOutlined";
import Mood from "@material-ui/icons/Mood";
import { db } from "../../StoreFeatures/firebase";
import { useState } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/a11y/a11y.scss";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import girl1 from "../../../Images/DummyProfile/10.2.png";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
function Profile() {
  const notify = () =>
    toast("Verify Yourself to get access to Your Future Partner", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  return (
    <div className="Profile">
      <div className="ProfileTop">
        <div className="ProfileBack" onClick={notify}>
          <ReplayIcon />
        </div>
        <div className="ProfileHeading">
          <p>SUGGESTED MATCHES</p>
        </div>
        <div className="ProfileDelete" onClick={notify}>
          <ClearIcon />
          <ToastContainer transition={Slide} />
        </div>
      </div>
      <div className="ProfileQuotes">
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="ProfileQuotesText">
              <p>
                Currently saying yes to new adventures, want an adventurous
                life. One day, I hope to be a happy old person telling wild
                stories from their wild youth.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ProfileQuotesBox" onClick={notify}>
              <div>
                <p>What's your dream bae-cation?</p>
              </div>
              <div className="ProfileQuotesMessage">
                <div className="ProfileQuotesLeft">
                  <Mood />
                  <p>Verify Before Matching</p>
                </div>
                <div className="QuotesMicBox">
                  <Mic />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ProfileQuotesBox" onClick={notify}>
              <div>
                <p>What's the best present you ever gave someone?</p>
              </div>
              <div className="ProfileQuotesMessage">
                <div className="ProfileQuotesLeft">
                  <Mood />
                  <p>Verify Before Matching</p>
                </div>
                <div className="QuotesMicBox">
                  <Mic />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <Swiper
        className="MainProfileSwiper"
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={false}
        navigation={{
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev",
        }}
      >
        <SwiperSlide>
          <div className="ProfileMain">
            <div className="ProfileMainTop">
              <div className="ProfileMainTopLeft">
                <img src={girl1} alt="userimage" />
                <p>Aakriti Patil</p>
              </div>
              <div className="ProfileMainTopRight">
                <ShareIcon />
              </div>
            </div>
            <div className="ProfileMainImage">
              <img src={girl1} alt="userimage" />
            </div>
            <div className="ProfileMainUserInfo">
              <div className="ProfileMainUserProfile">
                <div className="ProfileMainUserProfileHeading">PROFILE</div>
                <div className="ProfileMainUserProfileItems">
                  <div className="ProfileMainUserProfileItemsLeft">
                    <div>
                      <AccountCircleOutlinedIcon /> <p>19,Female</p>
                    </div>
                    <div>
                      <BusinessCenterOutlinedIcon /> <p>Blogger</p>
                    </div>
                    <div>
                      <LocationOnOutlinedIcon /> <p> Delhi</p>
                    </div>
                  </div>
                  <div className="ProfileMainUserProfileItemsRight">
                    <div>
                      <FiberManualRecordOutlinedIcon />
                      <p>Hindu</p>
                    </div>
                    <div>
                      <HeightOutlinedIcon /> <p>5'1''</p>
                    </div>
                    <div>
                      <TranslateOutlinedIcon />
                      <p>English</p>
                    </div>
                  </div>
                </div>
                <div className="ProfileMainUserProfileHashtag">
                  <p>Karaoke</p>
                  <p>Reading</p>
                  <p>Photography</p>
                  <p>Swimming</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper> */}
      <div className="ProfileMain">
        <div className="ProfileMainTop">
          <div className="ProfileMainTopLeft">
            <img src={girl1} alt="userimage" />
            <p>Aakriti Patil</p>
          </div>
          <div className="ProfileMainTopRight">
            <ShareIcon />
          </div>
        </div>
        <div className="ProfileMainImage">
          <img src={girl1} alt="userimage" />
        </div>
        <div className="ProfileMainUserInfo">
          <div className="ProfileMainUserProfile">
            <div className="ProfileMainUserProfileHeading">PROFILE</div>
            <div className="ProfileMainUserProfileItems">
              <div className="ProfileMainUserProfileItemsLeft">
                <div>
                  <AccountCircleOutlinedIcon /> <p>19,Female</p>
                </div>
                <div>
                  <BusinessCenterOutlinedIcon /> <p>Blogger</p>
                </div>
                <div>
                  <LocationOnOutlinedIcon /> <p> Delhi</p>
                </div>
              </div>
              <div className="ProfileMainUserProfileItemsRight">
                <div>
                  <FiberManualRecordOutlinedIcon />
                  <p>Hindu</p>
                </div>
                <div>
                  <HeightOutlinedIcon /> <p>5'1''</p>
                </div>
                <div>
                  <TranslateOutlinedIcon />
                  <p>English</p>
                </div>
              </div>
            </div>
            <div className="ProfileMainUserProfileHashtag">
              <p>Karaoke</p>
              <p>Reading</p>
              <p>Photography</p>
              <p>Swimming</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ProfileMainUserLifestyle">
        <div className="LifeStyleHeading">LIFESTYLE</div>
        <div className="LifestyleMain">
          <div>
            <p>Smoke</p>
            <p className="LifestyleText">Yes</p>
          </div>
          <div>
            <p>Drink</p>
            <p className="LifestyleText">Yes</p>
          </div>
          <div>
            <p>Diet</p>
            <p className="LifestyleText">Yes</p>
          </div>
        </div>
      </div>
      <div className="ProfileMainUserGoal">
        <div className="GoalHeading">GOALS</div>
        <div className="GoalsMain">
          <div>
            <p>Want Children?</p>
            <p className="GoalText">Yes</p>
          </div>
          <div>
            <p>Willing to shift?</p>
            <p className="GoalText">Yes</p>
          </div>
        </div>
      </div>
      <div className="ProfileMainUserAudioNotes">
        <div className="AudioHeading">
          <p>AUDIO NOTES</p> <LockIcon />
        </div>
        <div className="AudioMain">
          <div>
            <p className="AudioText">Verify Yourself to get access</p>
          </div>
        </div>
      </div>
      <div className="ProfileMainUserCompatibility">
        <div className="CompatibilityHeading">
          <p>YOUR COMPATIBILITY</p> <LockIcon />
        </div>
        <div className="CompatibilityMain">
          <div>
            <p className="CompatibilityText">Verify Yourself to get access</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
