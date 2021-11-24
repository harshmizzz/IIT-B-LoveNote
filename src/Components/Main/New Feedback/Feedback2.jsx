import React,{useState} from "react";
import Media from "react-media";
import { Router } from "react-router";
import SignUpFourth from "../../SignUp/FourthPage/SignUpFourth";
import HamburgerBox2 from "../../SignUp/SignUpNav/HamburgerBox2";
import SignUPNav from "../../SignUp/SignUpNav/SignUPNav";
import allura from "../../../Images/SignUp/Allura Feedback Session.png";
import { useSelector } from "react-redux";
import { selectUser } from "../../StoreFeatures/userSlice";
import { db } from "../../StoreFeatures/firebase";
import "./Feedback2.css"
const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        className="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="checkbox"></label>
    </>
  );
};

function Feedback2() {
  const [checkedItems, setCheckedItems] = useState({});
  const [textbox, settextbox] = useState("");
  const [phonevalue, setphonevalue] = useState("");
  const [phone, setphone] = useState(true);
  const handletextbox = (e) => {
    settextbox(e.target.value);
  };
  const handlephone = (e) => {
    setphonevalue(e.target.value);
  };
  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };
  const checkboxes1 = [
    {
      name: "Tinder",
      key: "Tinder",
      label: "Tinder",
    },
    {
      name: "Bumble",
      key: "Bumble",
      label: "Bumble",
    },
    {
      name: "Hinge",
      key: "Hinge",
      label: "Hinge",
    },
    {
      name: "Coffee meets bagel",
      key: "Coffee meets bagel",
      label: "Coffee meets bagel",
    },
    {
      name: "Ok Cupid",
      key: "Ok Cupid",
      label: "Ok Cupid",
    },
    {
      name: "eHarmony",
      key: "eHarmony",
      label: "eHarmony",
    },
    {
      name: "Happn",
      key: "Happn",
      label: "Happn",
    },
  ];
  const checkboxes2 = [
    {
      name: "Superficial profiles",
      key: "Superficial profiles",
      label: "Superficial profiles",
    },
    {
      name: "Faced ghosting issues",
      key: "Faced ghosting issues",
      label: "Faced ghosting issues",
    },
    {
      name: "Inappropriate behaviour of others",
      key: "Inappropriate behaviour of others",
      label: "Inappropriate behaviour of others",
    },
    {
      name: "Found fake profiles",
      key: "Found fake profiles",
      label: "Found fake profiles",
    },
    {
      name: "Security measure (information getting hacked)",
      key: "Security measure (information getting hacked)",
      label: "Security measure (information getting hacked)",
    },
    {
      name: "Faced ill suited language on the platform",
      key: "Faced ill suited language on the platform",
      label: "Faced ill suited language on the platform",
    },
    {
      name: "Platform couldn’t help find someone satisfactory",
      key: "Platform couldn’t help find someone satisfactory",
      label: "Platform couldn’t help find someone satisfactory",
    },
  ];
  const checkboxes3 = [
    {
      name: "Preferred meeting the person in real life to know more about them",
      key: "Preferred meeting the person in real life to know more about them",
      value:
        "Preferred meeting the person in real life to know more about them",
    },
    {
      name: "Preferred shifting to other modes of communication (eg: social media, whatsapp)",
      key: "Preferred shifting to other modes of communication (eg: social media, whatsapp)",
      value:
        "Preferred shifting to other modes of communication (eg: social media, whatsapp)",
    },
    {
      name: "Deleted the platform",
      key: "Deleted the platform",
      value: "Deleted the platform",
    },
    {
      name: "Reported the problems",
      key: "Reported the problems",
      value: "Reported the problems",
    },
  ];
  const checkboxes4 = [
    { name: "There are no reasons", key: "There are no reasons", value: "There are no reasons" },
    { name: "No time to go out and meet people/date", key: "No time to go out and meet people/date", value: "No time to go out and meet people/date" },
    { name: "It's more convenient and efficient", key: "It's more convenient and efficient", value: "It's more convenient and efficient" },
    { name: "Access to a larger pool of people", key: "Access to a larger pool of people", value: "Access to a larger pool of people" },
    { name: "To find someone we are more compatible with", key: "To find someone we are more compatible with", value: "To find someone we are more compatible with" },
    { name: "It is easier to meet people online initially", key: "It is easier to meet people online initially", value: "It is easier to meet people online initially" },
  ];
  const checkboxes5 = [ 
    {
      name: "Providing detail profiles for you to choose better",
      key:"Providing detail profiles for you to choose better",
      value: "Providing detail profiles for you to choose better"
    },
    {
      name: "Less ghosting (conversation reminders shield you from ghosting)",
      key:"Less ghosting (conversation reminders shield you from ghosting)",
      value: "Less ghosting (conversation reminders shield you from ghosting)"
    },
    {
      name: "Can enable or disable both audio and video call",
      key:"Can enable or disable both audio and video call",
      value: "Can enable or disable both audio and video call"
    },
    {
      name: "Compulsory verification of users",
      key:"Compulsory verification of users",
      value: "Compulsory verification of users"
    },
    {
      name: "Activities that help you get closer to your match",
      key:"Activities that help you get closer to your match",
      value: "Activities that help you get closer to your match"
    },
  ]
  const user = useSelector(selectUser);

  const onSubmit = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(user.uid)
      .collection("UserFormInputs")
      .doc("Feedback")
      .set({
        Feedbacks: checkedItems,
        Suggestion: textbox,
        Phone: {
          Mobile: phonevalue,
          testing: phone,
        },
      })
      .then(() => {
        localStorage.setItem("token", user.uid);
        window.location = "/Dashboard";
      });
      db.collection("users")
      .doc(user.uid)
      .collection("UserFormInputs")
      .doc("userDetails")
      .update({
        isFeedback:true,
      })
  };
  return (
    <div className="feedback2">
      <Media query={{ maxWidth: 800 }}>
        {(matches) => (matches ? <HamburgerBox2 /> : <SignUPNav />)}
      </Media>
      <div className="feedback2box">
          <div className="feedback2top">
              <h3>Let’s grow together</h3>
              <p>We would love for you to join our community! Contribute your ideas and help us grow together</p>
          </div>
          <div className="feedback2content">
            {/* <SignUpFourth /> */}
            <div className="SignUpFourth">
      <p className="SignUpFourthHeading">
        Since we are a community driven platform, we keep improving from your
        suggestions. Amazing suggestions would get a chance to be featured!
      </p>
      <div className="SignUpFourthPhoneBox">
        <p>Your Phone Number?</p>
        <input
          type="number"
          name="Phone Number"
          value={phonevalue}
          onChange={handlephone}
          placeholder="Help us grow by participating and contributing to amazing ideas"
        />
        <label>
          <input
            type="checkbox"
            name="Participating in Testing"
            checked={phone}
            onClick={() => {
              setphone(!phone);
            }}
            onChange={handleChange}
          />{" "}
          I agree for participating in product testing and ideation
        </label>
      </div>
      <p className="SignUpFourthSubHeading1">
        Which of the following apps have you used before?
      </p>
      <div className="SignUpFourthBox1">
        <div>
          {checkboxes1.map((item) => (
            <div className="SignUpFourthCheckboxBox">
              <label className="container" key={item.key}>
                <Checkbox
                  name={item.name}
                  checked={checkedItems[item.name]}
                  onChange={handleChange}
                />
                {item.name}
              </label>
            </div>
          ))}
        </div>
        <div className="SignUpFourthImg">
          <img src={allura} alt="feedback" />
        </div>
      </div>

      <p className="SignUpFourthSubHeading2">
        What hurdles did you face while using them?
      </p>
      {checkboxes2.map((item) => (
        <label key={item.key}>
          <Checkbox
            name={item.name}
            checked={checkedItems[item.name]}
            onChange={handleChange}
          />
          {item.name}
        </label>
      ))}
      <p className="SignUpFourthSubHeading2">
      How did you tackle these problems?
      </p>
      {checkboxes3.map((item) => (
        <label key={item.key}>
          <Checkbox
            name={item.name}
            checked={checkedItems[item.name]}
            onChange={handleChange}
          />
          {item.name}
        </label>
      ))}
      <p className="SignUpFourthSubHeading2">
      What are the reasons for you to use a dating app?
      </p>
      {checkboxes4.map((item) => (
        <label key={item.key}>
          <Checkbox
            name={item.name}
            checked={checkedItems[item.name]}
            onChange={handleChange}
          />
          {item.name}
        </label>
      ))}
      <p className="SignUpFourthSubHeading2">
      Reasons to favour us?
      </p>
      {checkboxes5.map((item) => (
        <label key={item.key}>
          <Checkbox
            name={item.name}
            checked={checkedItems[item.name]}
            onChange={handleChange}
          />
          {item.name}
        </label>
      ))}

      <p className="SignUpFourthSubHeading3">
        Share any awesome innovative idea(s), feature(s) that could help us
        expand and improve...
      </p>
      <textarea
        className="SignUpTextbox"
        onChange={handletextbox}
        value={textbox}
        cols="90"
        rows="10"
      ></textarea>
      <div className="SignUpFourthFormBottom">
        <h4>Yohoo! You’re done</h4>
        <input onClick={onSubmit} type="submit" value="Done & Dusted" />
      </div>
    </div>
          </div>
      </div>
    </div>
  );
}

export default Feedback2;
