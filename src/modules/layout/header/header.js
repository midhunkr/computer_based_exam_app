import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.heading}>Exam</h1>
    </header>
  );
};

const styles = {
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
