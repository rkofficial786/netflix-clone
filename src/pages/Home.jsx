import React from "react";
import bg from "../Assets/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import logo from "../Assets/netflix-logo-no-background-116606008333jnu4wpnt2-removebg-preview.png";
import { SlGlobe } from "react-icons/sl";
import Shifter from "../components/Shifter";
import img1 from "../Assets/tv.png";
import video1 from "../Assets/video-tv-in-0819.m4v";
import img2 from "../Assets/mobile-0819.jpg";
import img3 from "../Assets/device-pile-in.png";
import video2 from "../Assets/video-devices-in.m4v";
import img4 from "../Assets/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png"
import Qna from "../components/Qna";
import {qna} from "../data"
const Home = () => {
  const containerStyle = {
    
    width: "100%",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${bg})`,
    backgroundPosition: `center`,
    backgroundSize: "cover",
    borderBottom: "10px solid #232323",
  };

  return (
    <div className="">
      <div
        style={containerStyle}
        className="flex items-center min-h-[90vh] md:min-h-[78vh] flex-col relative"
      >
        <div className="flex justify-between w-7/12 mx-auto items-center  pt-5">
          <img src={logo} alt="" className="w-[200px] h-[50px] object-cover" />
          <div className="flex items-center justify-center gap-5">
            <div className="flex items-center justify-center gap-1 border-[1px] border-richblack-200">
              <select className="bg-transparent text-white border-none px-3 font-semibold py-1 ">
                <SlGlobe className="text-white" />
                <option value="" className="border-none">
                  {" "}
                  English
                </option>
                <option value="">Hindi</option>
              </select>
            </div>
            <button className="bg-red-5 hover:bg-red-10 px-3 py-1 text-white rounded-md border-none font-semibold transition-all ease-in-out duration-150">
              SignIn
            </button>
          </div>
        </div>

        <div className="text-white absolute bottom-[50%] translate-y-[60%]  text-center flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl font-extrabold">
            Enjoy big movies, hit series and more from ₹ 149.
          </h1>
          <p className="text-2xl">Join today. Cancel anytime.</p>
          <p className="text-2xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex items-center flex-wrap justify-center gap-5">
            <input
              placeholder="Email Address"
              className="bg-transparent px-2 py-4 border-[1px] border-richblack-300 lg:w-[400px] "
              type="text"
            />
            <button className="bg-red-5 text-3xl hover:bg-red-10 px-5 py-2 text-white rounded-md border-none font-semibold transition-all ease-in-out duration-150">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* component */}

      <Shifter
        text1={"Enjoy on your TV"}
        active={true}
        text2={
          "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        }
        image={img1}
        video={video1}
      />

      <div className="w-full h-[10px] bg-red-200"></div>

      <Shifter
        text1={"Download your shows to watch offline"}
       position={"flex-row-reverse"}
        text2={
          "Save your favourites easily and always have something to watch."
        }
        image={img2}
       
      />
      <div className="w-full h-[10px] bg-red-200"></div>

      <Shifter
        text1={"Watch everywhere"}
        text2={
          "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        }
        active={false}
        image={img3}
        video={video2}
      />
      <div className="w-full h-[10px] bg-red-200"></div>
       
       <Shifter
        text1={"Create profiles for kids"}
        text2={
          "Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        }
       
        image={img4}
        
      />
      <div className="w-full h-[10px] bg-red-200"></div>

      <Qna/>


    </div>
  );
};

export default Home;
