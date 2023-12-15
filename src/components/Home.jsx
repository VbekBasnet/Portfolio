import React from "react";
import HeroImage from "../assets/hero.png";
import { MdOutlineArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div
      name="home"
      className="flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center ">
          <h2 className=" text-4xl  mb-4 sm:text-7xl font-bold text-white ">
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-500">
              Hello, I'm {}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Developer",
                1000,
                "Freelancer",
                1000,
                "Graphic Designer",
                1000,
                "Video Editor",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <p className="text-gray-500 text-base sm:text-lg pr-10  mb-6 ">
            I have just completed my Bachelor Degree from Boston International
            College. Currently, I love to work on web application using
            technologies like React,Tailwind and Next JS.
          </p>
          <div className="p-20">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="text-white w-fit px-6 py-3  
             flex rounded-md bg-gradient-to-r
             from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <sapn className="hover:rotate-90 duration-300">
                <MdOutlineArrowRight size={25} className="ml-1" />
              </sapn>
            </Link>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px]">
            <img
              src={HeroImage}
              alt="my profile"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
