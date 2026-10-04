import React from "react";
import "./ProfileCard.css";

function ProfileCard() {
  return (
    <div className="profile-card">

      <div className="salary">$50/hr</div>

      <img
        className="profile-image"
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="Shahjahan"
      />

      <h1>Shahjahan</h1>

      <p className="role">UI Designer</p>

      <p className="company">🏢 Apple Inc.</p>

      <div className="skills">
        <span>UI</span>
        <span>UX</span>
        <span>Photoshop</span>
        <span className="more">+4</span>
      </div>

      <p className="description">
        Pawel is a 32 year old UX Designer, with
        over 10 years of experience in what he does.
      </p>

      <div className="line"></div>

      <button className="profile-btn">
        VIEW PROFILE
      </button>

    </div>
  );
}

export default ProfileCard;