import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./ProfileEdit.css";
import firebase from "firebase";
import { auth, db } from "../../StoreFeatures/firebase";
import { ErrorMessage } from "@hookform/error-message";
import { useSelector } from "react-redux";
import { selectUser } from "../../StoreFeatures/userSlice";

function ProfileEdit({ open, onclose }) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const response = db
          .collection("users")
          .doc(user.uid)
          .collection("UserFormInputs")
          .doc("userDetails");
        response
          .get()
          .then((doc) => {
            if (doc.exists) {
              setdata(doc.data());
            } else {
              console.log("No such document!");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      } else {
        console.log("not signed in");
      }
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const user = useSelector(selectUser);

  const onSubmit = (Items) => {
    console.log(Items);
    db.collection("users")
      .doc(user.uid)
      .collection("UserFormInputs")
      .doc("userDetails")
      .update({
        Age: Items.age,
        HeightFt: Items.HeightFt,
        HeightIn: Items.HeightIn,
        State: Items.location,
        Profession: Items.occupation,
        Diet: Items.diet,
        Exercise: Items.exercise,
        IsSmoke: Items.smoke,
        IsDrink: Items.drink,
        WantChildren: Items.children,
      })
      .then(() => {
        window.location = "/MyProfile";
      });
  };

  if (!open) return null;

  return (
    <div className="ProfileEditModalWrapper">
      <div className="ProfileEditModal">
        <div className="ProfileEditTop">
          <p className="ProfileEditHeading">Edit Profile Data</p>
          <p
            className="ProfileEditHeadingClose"
            onClick={handleSubmit(onclose)}
          >
            X
          </p>
        </div>
        <div className="ProfileEditBottom">
          <form className="SignUpSecondForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="ProfileEditItems">
              <label>Age</label>
              <input
                type="text"
                {...register("age", {
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Please enter a valid age",
                  },
                  value: data.Age,
                })}
                autoComplete="off"
                placeholder="Your age"
              />
              <ErrorMessage
                errors={errors}
                name="age"
                as="p"
                className="SignUpEmailError"
              />
            </div>
            <div className="ProfileEditItems">
              <label>Height</label>
              <div className="ProfileEditItemsHeightBox">
                <input
              type="text"
              {...register("HeightFt", {
                required: true,
                value: data.HeightFt,
                maxLength: {
                  value: 1,
                  message: "Too Many Characters"
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Please enter a valid Height in ft",
                },
              })}
              placeholder = "Ft"
              autoComplete = "off"
            />
             <input
              type="text"
              {...register("HeightIn", {
                required: true,
                value: data.HeightIn,
                maxLength: {
                  value: 1,
                  message: "Too Many Characters"
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Please enter a valid Height in Inches",
                },
              })}
              placeholder = "In"
              autoComplete = "off"
            />
            </div>
            </div>
            <div className="ProfileEditItems">
              <label>Location</label>
              <select
                {...register("location", {
                  value: data.State,
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
            </div>
            <div className="ProfileEditItems">
              <label>Your occupation?</label>
              <input
                type="text"
                {...register("occupation", { value: data.Profession })}
                autoComplete="off"
                placeholder="Type here"
              />
            </div>
            <div className="ProfileEditItems">
              <label>What's your diet</label>
              <select {...register("diet", { value: data.Diet })}>
                <option value="" disabled selected>
                  Choose
                </option>
                <option value="Vegetarian">Vegetarian</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Jain">Jain</option>
              <option value="Vegetarianism">Vegetarianism</option>
              <option value="Eggiterian">Eggiterian</option>
              </select>
            </div>
            <div className="ProfileEditItems">
              <label>Do you exercise?</label>
              <select {...register("exercise", { value: data.Exercise })}>
                <option value="" disabled selected>
                  Choose
                </option>
                <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Weekly">Weekly</option>
              <option value="1-3 times a week">1-3 times a week</option>
              <option value="4-6 Times a week">4-6 Times a week</option>
              <option value="Monthly">Monthly</option>
              </select>
            </div>
            <div className="ProfileEditItems">
              {" "}
              <label>Do you smoke?</label>
              <select {...register("smoke", { value: data.IsSmoke })}>
                <option value="" disabled selected>
                  Choose
                </option>
                <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Weekly">Weekly</option>
              <option value="1-3 times a week">1-3 times a week</option>
              <option value="4-6 Times a week">4-6 Times a week</option>
              <option value="Monthly">Monthly</option>
              </select>
            </div>
            <div className="ProfileEditItems">
              <label>Do you drink?</label>
              <select {...register("drink", { value: data.IsDrink })}>
                <option value="" disabled selected>
                  Choose
                </option>
                <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Weekly">Weekly</option>
              <option value="1-3 times a week">1-3 times a week</option>
              <option value="4-6 Times a week">4-6 Times a week</option>
              <option value="Monthly">Monthly</option>
              </select>
            </div>
            <div className="ProfileEditItems">
              <label>Do you want children?</label>
              <select {...register("children", { value: data.WantChildren })}>
                <option value="" disabled selected>
                  Choose
                </option>
                <option value="Yes">Yes</option>
                <option value="Never">Never</option>
                <option value="Maybe in future">Maybe in future</option>
              </select>
            </div>
            <input type="submit" value="Save" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;
