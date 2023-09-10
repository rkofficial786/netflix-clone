import React from "react";
import imag1 from "../Assets/device-pile-in.png";
import video1 from "../Assets/video-devices-in.m4v";

const Shifter = ({ text1, text2, image, video, position,active }) => {

  const containerStyle = {
    position: 'relative',
    overflow: 'hidden',
  };

  const videoStyle = {
    position: 'absolute',
    // top: "120px",
    // left: "90px",
    // width: '500px',
    // height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  };

  return (
    <div className="text-white mx-auto w-11/12 lg:w-10/12">
      <div className={`flex items-center flex-wrap ${position} justify-center gap-10   py-[50px]`} style={containerStyle}>
        <div className="" >
          <h1 className="text-5xl font-bold md:w-[500px]">{text1}</h1>
          <p className="text-2xl font-semibold mt-[20px] md:w-[700px]">
           {text2}
          </p>
        </div>

        <div style={{ position: 'relative' }} >
          <video src={video} autoPlay loop muted style={videoStyle} className={`${active?"top-[120px] left-[90px] w-[300px] lg:w-[500px]":"top-[40px] left-[120px] lg:w-[400px]"}`}></video>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Shifter;
