import React from "react";
import homeStyles from "./home.module.css";

export default function Banner() {
  return (
    <div className={homeStyles.banner}>
      <h1 className={homeStyles.name}>Sara Vedic Soul</h1>
      <img
        className={homeStyles.profilePhoto}
        alt="Sara Astrologer"
        src="https://joana-personal-website.s3.eu-central-1.amazonaws.com/sara-vedic-soul/profile-photo.png"
      />
    </div>
  );
}
