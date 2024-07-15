import React from "react";
import "./BehindTheScene.scss";
import behindTheScene from "../../assets/behindTheScene.svg";

const BehindTheScene = () => {
  return (
    <>
      <div className=" team__head ">
        <div>
          <img src={behindTheScene} alt="behindTheScene" />
        </div>
      </div>
    </>
  );
};

export default BehindTheScene;
