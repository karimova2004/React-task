import React, { useState } from "react";

const CustomButton = ({ text, warnMessage, hint }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (warnMessage) {
      setClicked(true);
      alert(warnMessage);
    }
  };

  const buttonStyle = {
    backgroundColor: warnMessage && clicked ? "red" : "#007BFF", 
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 15px",
    cursor: "pointer",
    fontStyle: hint ? "italic" : "normal",  
    border: warnMessage && clicked ? "2px solid darkred" : "none",  
  };

  return (
    <button onClick={handleClick} title={hint || ""} style={buttonStyle}>
      {text}
    </button>
  );
};

export default CustomButton;
