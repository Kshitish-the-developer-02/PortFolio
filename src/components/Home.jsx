import React from "react";
import heroImage from "../assets/images/heroImage.jpg";
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <div name="home" className=" w-full h-screen bg-gradient-to-b  from-black to bg-gray-800">
      {/* <img src={heroImage} alt="my image" /> */}
      <div className=" max-w-screen-lg mx-auto flex flex-col
                  items-center justify-center h-full px-4 md:flex-row">
        <div className=" flex flex-col justify-center h-full">
          <h2 className=" text-white text-4xl sm:text-7xl font-bold">I'm a Full Stack Developer</h2>
          <p className=" text-gray-500 py-4 max-w-md">
            Now i'm Placed from Naxtre Technlogy pvt.ltd,chandigarh. I have no
            work experience . Now i'm work with MERN Stack. But I'm sure i will
            definitely  success.
          </p>
          <div>
            <button className="group text-white w-fit  h-10 px-6 py-3my-2 flex items-center rounded-md gap-2
                           bg-gradient-to-r  from-cyan-500 via-rose-400 to-orange-400 cursor-pointer">
              Portfolio
              <span className=" group hover:rotate-90 duration-300">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div>
            <img src={heroImage} alt="my profile" 
            className=" rounded-2xl mx-auto w-[300px] md:w-80 "/>
        </div>
      </div>
    </div>
  );
}

export default Home;
