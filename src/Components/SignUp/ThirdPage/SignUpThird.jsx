import React from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Slider } from "@material-ui/core";
import couple from "../../../Images/SignUp/Family Values Catching Up.png";
import "./SignUpThird.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../StoreFeatures/userSlice";
import { db } from "../../StoreFeatures/firebase";
function SignUpThird() {
  const { register, handleSubmit, control } = useForm();
  const [val, setval] = useState([25, 35]);
  const user = useSelector(selectUser);
  const onSubmit = (data) => {
    db.collection("users")
      .doc(user.uid)
      .update({
        Preferences: {
          PGender: data.gender,
          PAge: val,
          PLocation: data.state,
          PReligion: data.religion,
          PExercise: data.exercise,
          PDrink: data.drink,
          PChildren: data.children,
          PDiet: data.diet,
          PSmoke: data.smoke,
        },
      })
      .then(() => {
        window.location = "/feedback";
      });

    console.log(data);
  };

  const updateRange = (e, data) => {
    setval(data);
    console.log(data);
  };
  return (
    <div className="SignUpThird">
      <div className="SignUpThirdLeft">
        <form onSubmit={handleSubmit(onSubmit)} className="SignUpThirdForm">
          <div className="ThirdFormItems">
            <label>Gender Preference</label>
            <select
              {...register("gender", {
                required: true,
              })}
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <div className="SignUpThirdItemsLines"></div>
          </div>
          <div className="ThirdFormItems">
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

          <div className="ThirdFormItems">
            <label>What state they should be from?</label>
            <select
              {...register("state", {
                required: true,
              })}
            >
              <option value="" disabled selected>
                State
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
            <div className="SignUpThirdItemsLines"></div>
          </div>
          <div className="ThirdFormItems">
            <label>What religion should they be from?</label>
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
            <div className="SignUpThirdItemsLines"></div>
          </div>
          <div className="ThirdFormItems">
            <label>Should they exercise?</label>
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
              <option value="Doesn't matter">Doesn't matter</option>
            </select>
            <div className="SignUpThirdItemsLines"></div>
          </div>
          <div className="ThirdFormItems">
            <label>What's their diet be?</label>
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
            <div className="SignUpThirdItemsLines"></div>
          </div>

          <div className="ThirdFormItems">
            <label>Should they smoke?</label>
            <select
              {...register("smoke", {
                required: true,
              })}
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Doesn't matter">Doesn't matter</option>
            </select>
            <div className="SignUpThirdItemsLines"></div>
          </div>
          <div className="ThirdFormItems">
            <label>Should they drink?</label>
            <select
              {...register("drink", {
                required: true,
              })}
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Doesn't matter">Doesn't matter</option>
            </select>
            <div className="SignUpThirdItemsLines"></div>
          </div>
          <div className="ThirdFormItems">
            <label>Should they want children?</label>
            <select
              {...register("children", {
                required: true,
              })}
            >
              <option value="" disabled selected>
                Choose
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Doesn't matter">Doesn't matter</option>
            </select>
            <div className="SignUpThirdItemsLines"></div>
          </div>
          <div className="SignUpThirdFormBottom">
            <h4>We'll keep this in mind</h4>
            <input type="submit" value="Continue" />
          </div>
        </form>
      </div>
      <div className="SignUpThirdRight">
        <img src={couple} alt="Couple" />
      </div>
    </div>
  );
}

export default SignUpThird;
