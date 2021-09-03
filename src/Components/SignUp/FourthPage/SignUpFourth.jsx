import React, { useState } from "react";
import "./SignUpFourth.css";
import allura from "../../../Images/SignUp/Allura Feedback Session.png";
import { useSelector } from "react-redux";
import { selectUser } from "../../StoreFeatures/userSlice";
import { db } from "../../StoreFeatures/firebase";

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

function SignUpFourth() {
  const [checkedItems, setCheckedItems] = useState({});
  const [textbox, settextbox] = useState("");
  const handletextbox = (e) => {
    settextbox(e.target.value);
  };
  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };
  const checkboxes1 = [
    {
      name: "Asking questions before matching",
      key: "Asking questions before matching",
      label: "Asking questions before matching",
    },
    {
      name: "Compatibility questions and percentage",
      key: "Compatibility questions and percentage",
      label: "Compatibility questions and percentage",
    },
    {
      name: "Receiving daily facts about a match",
      key: "Receiving daily facts about a match",
      label: "Receiving daily facts about a match",
    },
    {
      name: "Seeing a detailed profiles (seeing their photos, audios)",
      key: "Seeing a detailed profiles (seeing their photos, audios)",
      label: "Seeing a detailed profiles (seeing their photos, audios)",
    },
    {
      name: "Enabling and disabling of calls",
      key: "Enabling and disabling of calls",
      label: "Enabling and disabling of calls",
    },
    {
      name: "Reporting inappropriate messages on our platform",
      key: "Reporting inappropriate messages on our platform",
      label: "Reporting inappropriate messages on our platform",
    },
    {
      name: "Stages & activities in chat",
      key: "Stages & activities in chat",
      label: "Stages & activities in chat",
    },
    {
      name: "None of the above",
      key: "None of the above",
      label: "None of the above",
    },
  ];
  const checkboxes2 = [
    {
      name: "Images and videos of a person",
      key: "Images and videos of a person",
      label: "Images and videos of a person",
    },
    {
      name: "Their basic information",
      key: "Their basic information",
      label: "Their basic information",
    },
    {
      name: "Detailed stories",
      key: "Detailed stories",
      label: "Detailed stories",
    },
    {
      name: "Yours and their’s compatibility match percentage",
      key: "Yours and their’s compatibility match percentage",
      label: "Yours and their’s compatibility match percentage",
    },
    {
      name: "Being able to share profiles with others",
      key: "Being able to share profiles with others",
      label: "Being able to share profiles with others",
    },

    {
      name: "None",
      key: "None",
      label: "None",
    },
  ];
  const user = useSelector(selectUser);

  const onSubmit = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(user.uid)
      .update({
        Feedback: {
          Feedbacks: checkedItems,
          Suggestion: textbox,
        },
        isVerified: false,
      })
      .then(() => {
        window.location = "/main";
      });
  };

  return (
    <div className="SignUpFourth">
      <p className="SignUpFourthHeading">
        Since we are a community driven platform, we keep improving from your
        suggestions. Amazing suggestions would get a chance to be featured!
      </p>
      <p className="SignUpFourthSubHeading1">
        What feature on our platform caught your attention the most?
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
        When you choose from profiles, which section grabs your attention and
        you are interested in the most?
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
      {console.log(checkedItems)}
      <p className="SignUpFourthSubHeading3">
        Share any awesome innovative idea(s), feature(s) that could help us
        expand and improve...
      </p>
      {console.log(textbox)}
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
  );
}

export default SignUpFourth;
