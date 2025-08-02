import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import emoji from "react-easy-emoji";
import {educationInfo} from "../../portfolio";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">Education and Courses <span className="wave-emoji">{emoji("🎓")}</span></h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
