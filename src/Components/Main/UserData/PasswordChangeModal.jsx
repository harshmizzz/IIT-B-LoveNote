import React from "react";
import "./PasswordChangeModal.css";
import { useForm } from "react-hook-form";
import firebase from "firebase";
import { useDispatch } from "react-redux";
import { auth } from "../../StoreFeatures/firebase";
import { logout } from "../../StoreFeatures/userSlice";
function PasswordChangeModal({ open, onclose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    changePassword(data.OldPassword, data.NewPassword);
    console.log(data);
  };
  console.log(errors);
  const reAuthenticate = (currentPassword) => {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return user.reauthenticateWithCredential(cred);
  };
  const dispatch = useDispatch();
  const changePassword = (currentPassword, newPassword) => {
    reAuthenticate(currentPassword)
      .then(() => {
        var user = firebase.auth().currentUser;
        user
          .updatePassword(newPassword)
          .then(() => {
            console.log("Password updated!");
          })
          .then(onclose())
          .then(() => {
            auth.signOut().then(() => {
              dispatch(logout());
              auth.signOut();
              window.location = "/login";
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!open) return null;
  return (
    <div>
      <div className="PasswordModalWrapper">
        <div className="PasswordModal">
          <div className="PasswordModalTop">
            <div className="PasswordModalHeading">
              <p>Change Password</p>
            </div>
          </div>
          <div className="PasswordModalContent">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Old Password"
                {...register("OldPassword", { required: true, min: 8 })}
              />
              <div className="PasswordModalLine"></div>
              <input
                type="text"
                placeholder="New Password"
                {...register("NewPassword", { required: true, min: 8 })}
              />
              <div className="PasswordModalLine"></div>

              <input
                type="text"
                placeholder="Confirm New Password"
                {...register("ConfirmNewPassword", {
                  required: true,
                  min: 8,
                })}
              />
              <div className="PasswordModalLine"></div>
              <div className="PasswordModalButton">
                <p onClick={onclose}>Cancel</p>
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordChangeModal;
