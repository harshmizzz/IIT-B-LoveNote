import React, { useState } from "react";
import "./VerificationPage.css";
import MainNavBar from "../Main/MainNav/MainNavBar";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import CancelIcon from "@material-ui/icons/Cancel";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import HandsCamera from "../../Images/Main/Hands Camera.png";
import Selfie from "../../Images/Main/Hands Selfie.png";
import VerificationModal from "./VerificationModal";
import { useSelector } from "react-redux";
import { selectUser } from "../StoreFeatures/userSlice";
import { db } from "../StoreFeatures/firebase";
import firebase from "firebase";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Media from "react-media";
import HamburgerBox2 from "../SignUp/SignUpNav/HamburgerBox2";
import { useHistory } from "react-router";
function VerificationPage() {
  const [file, setFile] = useState([]);
  const [filesupload, setfilesupload] = useState([]);
  const [dataUri, setDataUri] = useState("");
  const [isOpen, setisOpen] = useState(false);
  const [camerastate, setcamerastate] = useState(true);
  function handleTakePhotoAnimationDone(dataUri) {
    console.log("takePhoto");
    setDataUri(dataUri);
    console.log(dataUri);
  }
  const isFullscreen = false;
  function uploadSingleFile(e) {
    setFile([...file, URL.createObjectURL(e.target.files[0])]);
    console.log("file", file);
    setfilesupload([...filesupload, e.target.files[0]]);
    console.log("i", filesupload);
  }
  const [state, setstate] = useState();
  const user = useSelector(selectUser);
  function upload(e) {
    if (file.length > 0 && dataUri) {
      e.preventDefault();
      setisOpen(true);
      console.log(file);
      db.collection("users")
        .doc(user.uid)
        .collection("UserFormInputs")
        .doc("userDetails")
        .update({ isVerified: true });

      // uploading to firebase storage
      const promises = [];
      filesupload.forEach((file) => {
        const uploadTask = firebase
          .storage()
          .ref()
          .child(`${user.uid}/${file.name}`)
          .put(file);

        promises.push(uploadTask);
        uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            if (snapshot.state === firebase.storage.TaskState.RUNNING) {
              console.log(`Progress: ${progress}%`);
              setstate(progress);
            }
          },
          (error) => console.log(error.code)
        );
      });

      const uploadcamera = firebase
        .storage()
        .ref()
        .child(`${user.uid}/verify.jpg`)
        .putString(dataUri, "data_url", { contentType: "image/png" });

      Promise.all(promises)
        .then(() => alert("All files uploaded"))
        .catch((err) => console.log(err.code));
    } else {
      alert("select the files and click a live photo");
    }
  }

  const history = useHistory();

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
    console.log(s);
  }
  function deleteFile2(e) {
    setDataUri(null);
  }
  return (
    <div className="VerificationPage">
      <Media query={{ maxWidth: 800 }}>
        {(matches) => (matches ? <HamburgerBox2 /> : <MainNavBar />)}
      </Media>
      <div className="VerificationPageContainer">
        <div className="VerificationPageHeading">
          <div className="VerificationPageHeadingLeft">
            <div className="VerificatinPageArrowContainer">
              <div
                className="VerificationPageBackArrow"
                onClick={() => {
                  history.push("/main");
                }}
              >
                <ArrowBackIcon />
              </div>
              <h3>Verification</h3>
            </div>

            <p>
              Thanks for verifiying yourself, trust us it’s a good step to take
            </p>
          </div>
        </div>
        <div className="VerificationBox">
          <div className="VerificationBoxLeft">
            <div className="VerificationBoxHeading">
              <p className="VerificationBoxHeadingBig">1</p>
              <div className="VerificationBoxHeadingSmall">
                <p className="VerificationBoxHeadingSmall1">
                  Upolad your Profile photos
                </p>
                <p className="VerificationBoxHeadingSmall2">
                  Upload minimum one solo photo of yours
                </p>
              </div>
            </div>
            <div className="VerificationBoxItem">
              <div className="VerificationItemGrid">
                {file.length > 0 &&
                  file.map((item, index) => {
                    return (
                      <div className="VerificationGridImageBox" key={item}>
                        <img
                          className="VerificationGridImage"
                          src={item}
                          alt="userphoto"
                        />
                        <button
                          className="VerificationImageDelete"
                          type="button"
                          onClick={() => deleteFile(index)}
                        >
                          <CancelIcon />
                        </button>
                      </div>
                    );
                  })}
              </div>
              <label
                aria-disabled={file.length === 6}
                id={`${file.length === 6 ? "getfiledisabled" : "getFileLabel"}`}
                for="getFile"
              >
                <ControlPointIcon fontSize="large" />
              </label>
              <input
                disabled={file.length === 6}
                className="form-control"
                onChange={uploadSingleFile}
                type="file"
                id="getFile"
              />
            </div>
            <div className="counter"> {file.length}/6</div>
          </div>
          <div className="VerificationBoxRight">
            <div className="VerificationBoxHeading2">
              <p className="VerificationBoxHeadingBig">2</p>
              <div className="VerificationBoxHeadingSmall">
                <p className="VerificationBoxHeadingSmall1">Say cheese!</p>
                <p className="VerificationBoxHeadingSmall2" s>
                  Click a live photo
                </p>
              </div>
            </div>
            <div className="VerificationBoxItem">
              {dataUri ? (
                <div className="VerificationGridImageBox">
                  <img className="VerificationGridImage" src={dataUri} alt="" />
                  <button
                    className="VerificationImageDelete"
                    onClick={deleteFile2}
                  >
                    <CancelIcon />
                  </button>
                </div>
              ) : (
                <div
                  className="Cameracontroller"
                  onClick={() => setcamerastate(false)}
                >
                  {camerastate ? (
                    <ControlPointIcon fontSize="large" />
                  ) : (
                    <Camera
                      onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
                      isFullscreen={isFullscreen}
                      idealResolution={{ width: 640, height: 480 }}
                      imageCompression={0.97}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="VerificationButtonBox">
        <button
          onClick={upload}
          className="VerificationFormSubmit"
          type="submit"
        >
          Verify
        </button>

        <VerificationModal
          progress={state}
          open={isOpen}
          onclose={() => setisOpen(false)}
        />
        <div>
          <img src={HandsCamera} className="HandsCamera" alt="Camera" />
          <img src={Selfie} className="HandsSelfie" alt="selfie" />
        </div>
      </div>
    </div>
  );
}

export default VerificationPage;
