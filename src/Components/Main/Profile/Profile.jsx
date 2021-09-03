import React, { useEffect } from "react";
import "./Profile.css";
import ClearIcon from "@material-ui/icons/Clear";
import ReplayIcon from "@material-ui/icons/Replay";
import ShareIcon from "@material-ui/icons/Share";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import TranslateOutlinedIcon from "@material-ui/icons/TranslateOutlined";
import LockIcon from "@material-ui/icons/Lock";
import HeightOutlinedIcon from "@material-ui/icons/HeightOutlined";
import { db } from "../../StoreFeatures/firebase";
import { useState } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/a11y/a11y.scss";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
function Profile() {
  const [Quotes, setQuotes] = useState([]);
  const FetchData = async () => {
    const citiesRef = db.collection("Quotes");
    const snapshot = await citiesRef
      .get()
      .then((snapshot) =>
        snapshot.forEach((doc) =>
          setQuotes((Quotes) => [...Quotes, doc.data()])
        )
      );
  };
  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="Profile">
      <div className="ProfileTop">
        <div className="ProfileBack">
          <ReplayIcon />
        </div>
        <div className="ProfileHeading">
          <p>SUGGESTED MATCHES</p>
        </div>
        <div className="ProfileDelete">
          <ClearIcon />
        </div>
      </div>
      <div className="ProfileQuotes">
        {/* <div className="ProfileQuotesText">
          <p>
            I like taking the scenic route, while looking at the world through
            colored glasses.Join me on this journey?
          </p>
        </div>
        {console.log(Quotes)}
        <div className="ProfileQuoteHashtag">
          <p>Happy Thoughts</p> <p>Realism</p>
        </div> */}
        <Swiper
          // install Swiper modules
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {console.log(Quotes)}
          {Quotes.map((data) => (
            <SwiperSlide>
              <div className="ProfileQuotesText">
                <p>{data.quote}</p>
              </div>
              <div className="ProfileQuoteHashtag">
                {data.hashtag.map((hashtagdata) => (
                  <p>{hashtagdata}</p>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="ProfileMain">
        <div className="ProfileMainTop">
          <div className="ProfileMainTopLeft">
            <img
              src="https://images.unsplash.com/photo-1599110906885-b024c90c2773?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwdXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt="userimage"
            />
            <p>Harsh Mishra</p>
          </div>
          <div className="ProfileMainTopRight">
            <ShareIcon />
          </div>
        </div>
        <div className="ProfileMainImage">
          <img
            src="https://images.unsplash.com/photo-1599110906885-b024c90c2773?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwdXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="userimage"
          />
        </div>
        <div className="ProfileMainUserInfo">
          <div className="ProfileMainUserProfile">
            <div className="ProfileMainUserProfileHeading">PROFILE</div>
            <div className="ProfileMainUserProfileItems">
              <div className="ProfileMainUserProfileItemsLeft">
                <div>
                  <AccountCircleOutlinedIcon /> <p>age,gender</p>
                </div>
                <div>
                  <BusinessCenterOutlinedIcon /> <p>profession</p>
                </div>
                <div>
                  <LocationOnOutlinedIcon /> <p> location</p>
                </div>
              </div>
              <div className="ProfileMainUserProfileItemsRight">
                <div>
                  <FiberManualRecordOutlinedIcon />
                  <p>Religion</p>
                </div>
                <div>
                  <HeightOutlinedIcon /> <p>height</p>
                </div>
                <div>
                  <TranslateOutlinedIcon />
                  <p>Language</p>
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
