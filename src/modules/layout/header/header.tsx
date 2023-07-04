import React, { CSSProperties } from "react";
import CountdownTimer from "../../components/remainingtime";

const Header: React.FC = () => {
  return (
    <div style={styles.header} className="d-flex justify-content-between">
      <h1 style={styles.heading}>Exam</h1>
      <div className="d-flex align-items-center">
        <div className=" mr-2">Remaining time</div>
        <CountdownTimer timeLimitInMinutes={1} />
      </div>
    </div>
  );
};

const styles: {
  header: CSSProperties;
  heading: CSSProperties;
} = {
  header: {
    backgroundColor: "rgb(230, 97, 97)",
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    color: "#FFFFFF",
    fontSize: "2rem",
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
  },
};

export default Header;
