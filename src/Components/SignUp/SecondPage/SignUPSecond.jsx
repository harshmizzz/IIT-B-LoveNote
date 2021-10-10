import React, { useState } from "react";
import "./SignUpSecond.css";
import men from "../../../Images/SignUp/Stuck at Home Sitting On Floor.png";
import women from "../../../Images/SignUp/Olá Planting.png";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { auth, db } from "../../StoreFeatures/firebase";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../StoreFeatures/userSlice";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "English ", value: "English" },
  { label: "Hindi ", value: "Hindi" },
  { label: "Marathi ", value: "Marathi" },
  { label: "Tamil ", value: "Tamil" },
  { label: "Telugu ", value: "Telugu" },
  { label: "Kannada ", value: "Kannada" },
];
function SignUPSecond() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
    db.collection("users")
      .doc(user.uid)
      .collection("UserFormInputs")
      .doc("userDetails")
      .set({
        Fullname: data.name,
        Age: data.age,
        Gender: data.gender,
        HeightFt: data.height,
        State: data.location,
        Languages: selected.map((n) => n.label),
        Profession: data.occupation,
        Relationship: data.status,
        Diet: data.diet,
        Exercise: data.exercise,
        IsSmoke: data.smoke,
        IsDrink: data.drink,
        WantChildren: data.children,
        Religion: data.religion,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        window.location = "/preferences";
      });
    auth.currentUser.updateProfile({
      displayName: data.name,
    });
    dispatch(
      login({
        email: user.email,
        uid: user.uid,
        name: data.name,
      })
    );
  };
  return (
    <div className="SignUpSecond">
      <div className="SignUpSecondLeft">
        <form className="SignUpSecondForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="SecondFormItems">
            <label>Name</label>
            <input
              type="text"
              {...register("name", {
                required: true,
              })}
              autoComplete="off"
              placeholder="Your name"
            />
            <div className="SignUpSecondItemsLines"></div>
          </div>
          <div className="SecondFormItems">
            <label>Age</label>
            <input
              type="text"
              {...register("age", {
                required: true,
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Please enter a valid age",
                },
                min: {
                  value: 18,
                  message: "Minimum Age Should be 18",
                },
              })}
              autoComplete="off"
              placeholder="Your age"
            />
            <div className="SignUpSecondItemsLines"></div>
            <ErrorMessage
              errors={errors}
              name="age"
              as="p"
              className="SignUpEmailError"
            />
          </div>
          <div className="SecondFormItems">
            <label>Gender</label>
            <select
              {...register("gender", {
                required: true,
              })}
            >
              <option value="" disabled selected>
                Choose your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <div className="SignUpSecondItemsLines"></div>
          </div>
          <div className="SecondFormItems">
            <label>Height</label>
            <input
              type="text"
              {...register("height", {
                required: true,
                pattern: {
                  value: /^[0-9,'".]+$/,
                  message: "Please enter a valid height",
                },
              })}
              autoComplete="off"
              placeholder="In feet"
            />
            <div className="SignUpSecondItemsLines"></div>
            <ErrorMessage
              errors={errors}
              name="height"
              as="p"
              className="SignUpEmailError"
            />
          </div>
          <div className="SecondFormItems">
            <label>Location</label>
            <select
              {...register("location", {
                required: true,
              })}
            >
              <option value="" disabled selected>
                Choose your state
              </option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadar and Nagar Haveli">
                Dadar and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
            <div className="SignUpSecondItemsLines"></div>
          </div>
          <div className="SecondFormItems">
            <label>What language(s) can you speak?</label>
            <MultiSelect
              options={options}
              value={selected}
              disableSearch
              hasSelectAll={false}
              onChange={setSelected}
              labelledBy="Choose"
            />
            {console.log(selected.map((n) => n.label))}
            <div className="SignUpSecondItemsLines"></div>
          </div>
          <div className="SecondFormItems">
            <label>Your occupation?</label>
            <input
              type="text"
              {...register("occupation", {
                required: true,
              })}
              autoComplete="off"
              placeholder="Type here"
            />
            <div className="SignUpSecondItemsLines"></div>
          </div>
          <div className="SecondFormItems">
            <label>Your current status is...</label>
            <select
              {...register("status", {
                required: true,
              })}
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Complicated">Complicated</option>
            </select>
            <div className="SignUpSecondItemsLines"></div>
          </div>
          <h3 className="SignUpSecondMoreHeading">
            Tell us something more about you...
          </h3>
          <div className="SecondFormItems">
            <label>What's your diet</label>
            <select
              {...register("diet", {
                required: true,
              })}
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
              <option value="Vegan">Vegan</option>
            </select>
            <div className="SignUpSecondItemsLines"></div>
          </div>
          <div className="SecondFormItems">
            <label>Your Religion?</label>
            <select
              {...register("religion", {
                required: true,
              })}
            >
              <option value="" disabled selected>
                Religion
              </option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Christian">Christian</option>
              <option value="Any">Any</option>
            </select>
            <div className="SignUpSecondItemsLines"></div>
          </div>
          <div className="SecondFormItems">
            <label>Do you exercise?</label>
            <select
              {...register("exercise", {
                required: true,
              })}
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Sometimes">Sometimes</option>
            </select>
            <div className="SignUpSecondItemsLines"></div>
          </div>
          <div className="SecondFormItems">
            <label>Do you smoke?</label>
            <select
              {...register("smoke", {
                required: true,
              })}
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="Yes">Yes</option>
              <option value="Never">Never</option>
              <option value="Occasionally">Occasionally</option>
            </select>
            <div className="SignUpSecondItemsLines"></div>
          </div>
          <div className="SecondFormItems">
            <label>Do you drink?</label>
            <select
              {...register("drink", {
                required: true,
              })}
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="Yes">Yes</option>
              <option value="Never">Never</option>
              <option value="Occasionally">Occasionally</option>
            </select>
            <div className="SignUpSecondItemsLines"></div>
          </div>
          <div className="SecondFormItems">
            <label>Do you want children?</label>
            <select
              {...register("children", {
                required: true,
              })}
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="Yes">Yes</option>
              <option value="Never">Never</option>
              <option value="Maybe in future">Maybe in future</option>
            </select>
            <div className="SignUpSecondItemsLines"></div>
          </div>
          <div className="SignUpSecondFormBottom">
            <h4>Awesome! Let's go ahead</h4>
            <input type="submit" value="Continue" />
          </div>
        </form>
      </div>
      <div className="SignUpSecondRight">
        <img className="SecondFormWomen" src={women} alt="women" />
        <img className="SecondFormMen" src={men} alt="men" />
      </div>
    </div>
  );
}

export default SignUPSecond;
