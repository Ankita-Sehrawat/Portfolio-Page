import Image from "next/image";
import React from "react";
import vikash_img from "../../../public/assets/images/png/Vikash_img.png";
import {
  DownloadIcon,
  GithubIcon,
  HeroSecElp,
  LinkdinIcon,
  TwitterIcon,
  YouTubeIcon,
} from "./Icon";
import { HeroSecArr } from "./Helper";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-118px)] flex flex-col">
      <div className="container max-w-[1140px] 2xl:max-w-[1550px] mx-auto px-5  flex-grow flex flex-col justify-center">
        <div className="flex flex-wrap items-center flex-col-reverse md:flex-row w-full">
          <div className="w-full mt-4 md:mt-0 md:w-1/2 text-center sm:text-start ">
            <div>
              <p className="font-normal text-base md:text-xl text-white">
                Full Stack Developer
              </p>
              <h1 className="font-semibold text-4xl md:text-[54px] lg:text-7xl xl:text-[80px] text-white md:!leading-[50px] lg:!leading-[90px] mt-1">
                Hello I’ m <span className="text-[#15FFEA]">Vikas Boora</span>
              </h1>
              <p className="font-normal text-base md:text-lg text-white/80 pt-4 pb-10 md:py-[30px]">
                Lorem ipsum dolor sit amet consectetur. At augue dignissim eu
                posuere non mi dictum lacus praesent. Aliquet elit r dolor.
              </p>
            </div>
            <div className="flex max-[420px]:flex-col gap-5 lg:gap-[29px] justify-center sm:justify-start  ">
              <button className=" border border-[#15FFEA] p-[10px] min-[850px]:p-[10px_20px] flex items-center justify-center gap-1 min-[850px]:gap-[10px] rounded-[50px] max-sm:w-[200px] max-[460px]:m-auto duration-300 hover:duration-300 hover:bg-[#15FFEA]  group ">
                <p className="text-center uppercase text-[#15FFEA] text-sm min-[850px]:text-base group-hover:text-black ">
                  Download cv
                </p>
                <DownloadIcon />
              </button>
              <div className="flex max-sm:justify-center gap-2 lg:gap-5">
                <a target="_blank" href="https://www.github.com/">
                  <span className="border border-[#15FFEA] rounded-[50px]  flex justify-center items-center w-10 h-10 duration-500 hover:-translate-y-3 hover:bg-[#15FFEA] socialHover ">
                    <GithubIcon />
                  </span>
                </a>
                <a target="_blank" href="https://www.github.com/">
                  <span className="border border-[#15FFEA] rounded-[50px]  flex justify-center items-center w-10 h-10 duration-500 hover:-translate-y-3 hover:bg-[#15FFEA] socialHover ">
                    <YouTubeIcon />
                  </span>
                </a>
                <a target="_blank" href="https://www.github.com/">
                  <span className="border border-[#15FFEA] rounded-[50px]  flex justify-center items-center w-10 h-10 duration-500 hover:-translate-y-3 hover:bg-[#15FFEA] socialHover ">
                    <TwitterIcon />
                  </span>
                </a>
                <a target="_blank" href="https://www.github.com/">
                  <span className="border border-[#15FFEA] rounded-[50px]  flex justify-center items-center w-10 h-10 duration-500 hover:-translate-y-3 hover:bg-[#15FFEA] socialHover ">
                    <LinkdinIcon />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">

            <div className="absolute left-0 lg:-top-12 xl:-top-10 md:-top-16 sm:-top-5 hidden sm:block ">
              <HeroSecElp />
            </div>

            <div className=" after:absolute max-[400px]:w-[280px] max-[400px]:h-[280px] w-[360px] h-[360px] lg:w-[488px] lg:h-[488px] relative after:w-full after:h-full after:animate-spin duration-[20s] after:duration-[20s]  rounded-[700px] after:rounded-[700px] after:border-[4px] after:border-dashed after:border-[#15FFEA] shadow-[-5px_5px_40px_0px_#15FFEA66]  after:top-0 after:left-0 overflow-hidden">
              <Image
                className=" w-[344px] h-[478px] object-cover object-center m-auto "
                src={vikash_img}
                alt="img"
              />
            </div>
          </div>
        </div>


        {/* ### anylytics ### */}
        <div className="w-full lg:w-[90%] mx-auto flex flex-col min-[400px]:flex-row flex-wrap gap-5 md:gap-16  lg:gap-[100px] items-center justify-center sm:justify-between md:justify-center mt-[70px] mb-8 ">
          {HeroSecArr.map((item, i) => {
            return (
              <div
                key={i}
                className="  min-[440px]:w-5/12 sm:w-2/12 flex  gap-[15px] items-center "
              >
                <h1 className=" ff_roadRage text-5xl lg:text-[64px] font-normal text-[#FFFFFFCC] ">
                  {" "}
                  {item.numVal}{" "}
                </h1>
                <p className="  text-sm lg:text-lg font-normal text-[#FFFFFFCC] ">
                  {" "}
                  {item.text}{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
