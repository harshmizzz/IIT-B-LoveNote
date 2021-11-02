import React, { useEffect, useState } from "react";
import "./PreferencesEdit.css";
import { Controller, useForm } from "react-hook-form";
import firebase from "firebase";
import { auth, db } from "../../StoreFeatures/firebase";
import { ErrorMessage } from "@hookform/error-message";
import { useSelector } from "react-redux";
import { selectUser } from "../../StoreFeatures/userSlice";
import { Slider } from "@material-ui/core";
function PreferencesEdit({ open, onclose, age0, age1 }) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const response = db
          .collection("users")
          .doc(user.uid)
          .collection("UserFormInputs")
          .doc("userPreferences");
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
    control,
  } = useForm();
  const [val, setval] = useState([age0, age1]);

  const user = useSelector(selectUser);
  const updateRange = (e, data) => {
    setval(data);
    console.log(data);
  };
  const onSubmit = (Items) => {
    console.log(Items);
    db.collection("users")
      .doc(user.uid)
      .collection("UserFormInputs")
      .doc("userPreferences")
      .update({
        Gender: Items.gender,
        Age: val,
        State: Items.state,
        Religion: Items.religion,
        Exercise: Items.exercise,
        IsDrink: Items.drink,
        WantChildren: Items.children,
        Diet: Items.diet,
        IsSmoke: Items.smoke,
      })
      .then(() => {
        window.location = "/MyProfile";
      });
  };

  if (!open) return null;

  return (
    <div className="PreferencesEditModalWrapper">
      <div className="PreferencesEditModal">
        <div className="PreferencesEditTop">
          <p className="PreferencesEditHeading">Edit Profile Data</p>
          <p
            className="PreferencesEditHeadingClose"
            onClick={handleSubmit(onclose)}
          >
            X
          </p>
        </div>
        <div className="PreferencesEditBottom">
          <form className="SignUpSecondForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="PreferencesEditItems">
              <label>Gender Preference</label>
              <select
                {...register("gender", {
                  value: data.Gender,
                })}
              >
                <option value="" disabled selected>
                  Choose
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="PreferencesEditItems PreferencesEditItemsAge">
              <label>What age group would you prefer to see</label>

              <Controller
                control={control}
                name="age range"
                defaultValue={25}
                render={() => (
                  <div className="sliderComponent">
                    <Slider
                      min={18}
                      valueLabelDisplay="on"
                      max={99}
                      step={1}
                      value={val}
                      onChange={updateRange}
                    />
                  </div>
                )}
              />
            </div>
            <div className="PreferencesEditItems">
              <label>What state they should be from?</label>
              <select
                {...register("state", { value: data.State })}
              >
                <option value="" disabled selected>
                  State
                </option>
                <option value="Open to Anywhere">Open to Anywhere</option>
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
            <div className="PreferencesEditItems">
              <label>What religion should they be from?</label>
              <select
                {...register("religion", {
                  value: data.Religion,
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
            </div>
            <div className="PreferencesEditItems">
              {" "}
              <label>Should they exercise?</label>
              <select
                {...register("exercise", {
                  value: data.Exercise,
                })}
              >
                <option value="" disabled selected>
                  Choose
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Doesn't matter">Doesn't matter</option>
              </select>
            </div>
            <div className="PreferencesEditItems">
              {" "}
              <label>What's their diet be?</label>
              <select
                {...register("diet", {
                  value: data.Diet,
                })}
              >
                <option value="" disabled selected>
                  Choose
                </option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
                <option value="Vegan">Vegan</option>
              </select>
            </div>
            <div className="PreferencesEditItems">
              {" "}
              <label>Should they smoke?</label>
              <select
                {...register("smoke", {
                  value: data.IsSmoke,
                })}
              >
                <option value="" disabled selected>
                  Choose
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Doesn't matter">Doesn't matter</option>
              </select>
            </div>
            <div className="PreferencesEditItems">
              {" "}
              <label>Should they drink?</label>
              <select
                {...register("drink", {
                  value: data.IsDrink,
                })}
              >
                <option value="" disabled selected>
                  Choose
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Doesn't matter">Doesn't matter</option>
              </select>
            </div>
            <div className="PreferencesEditItems">
              {" "}
              <label>Should they want children?</label>
              <select
                {...register("children", {
                  value: data.WantChildren,
                })}
              >
                <option value="" disabled selected>
                  Choose
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Doesn't matter">Doesn't matter</option>
              </select>
            </div>
            <input type="submit" value="Save" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default PreferencesEdit;
