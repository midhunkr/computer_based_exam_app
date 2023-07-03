import React, { useContext } from "react";
import CandidateImage from "../../../assets/photos/candidate_image.jpeg";
import { CandidateContext } from "../../../context/CandidateContext";

const ProfileData: React.FC = () => {
  const { candidateName, candidateRollNumber } = useContext(CandidateContext);
  return (
    <div className="profile-data-root mt-2 d-flex flex-column align-items-center pt-2">
      <div className="candidate-image-holder">
        <img src={CandidateImage} className="candidate-image" alt="CandidatePhoto" />
      </div>
      <div className="candidate-name">Name: {candidateName}</div>
      <div className="candidate-roll-no">RollNo: {candidateRollNumber}</div>
    </div>
  );
};

export default ProfileData;
