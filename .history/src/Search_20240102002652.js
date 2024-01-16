import React from "react";
import "./style.css";

export const Template = () => {
  return (
    <div className="template">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <img className="line" alt="Line" src="line-16.svg" />
            <img className="img" alt="Line" src="line-17.svg" />
          </div>
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
        </div>
        <div className="rectangle-4" />
        <div className="rectangle-5" />
      </div>
    </div>
  );
};
