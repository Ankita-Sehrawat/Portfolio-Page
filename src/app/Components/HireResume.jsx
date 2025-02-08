"use client";
import React, { useState } from "react";
import CardExp from "./CardExp";
import SkillCard from "./SkillCard";
import { ResumeElpBottom, ResumeElpTop } from "./Icon";
import AboutCard from "./AboutCard";
import EduCard from "./EduCard";

const HireResume = () => {
  const [activeTabs, setActiveTabs] = useState("Skills");

  return (
    <div id="resume" className="relative py-12 lg:pt-[81px] xl:pb-[225px] ">
      <div className="container max-w-[1140px] 2xl:max-w-[1550px] mx-auto px-5  ">

        <div>
          <div className="absolute right-0 top-[20%] z-[-1] hidden xl:block "> <ResumeElpTop /> </div>
          <div className="absolute left-0 bottom-0 z-[-1] hidden xl:block "> <ResumeElpBottom /> </div>
        </div>

        <h1 className="text-[35px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-normal text-white mb-5   ">
          Resume...
        </h1>

        <div className="flex flex-wrap max-lg:flex-col  ">
          <div className="sm:p-[30px] max-lg:w-full w-4/12 ">
            <h1 className="text-[32px] lg:text-[40px] font-semibold text-white  ">
              Why hire me?
            </h1>
            <ol className="list-disc list-inside">
              <li className="text-base font-normal text-white/80 my-3 md:my-5 tracking-[2px] ">  I deliver high-quality, clean code with a focus on performance and scalability. </li>
              <li className="text-base font-normal text-white/80 my-3 md:my-5 tracking-[2px] "> I ensure that your website or application is fully responsive, accessible, and user-friendly. </li>
              <li className="text-base font-normal text-white/80 my-3 md:my-5 tracking-[2px] ">  I’m experienced in debugging, performance optimization, and ensuring cross-browser compatibility. </li>
            </ol>


            <div className="flex flex-col gap-5 max-[500px]:flex-col min-[500px]:flex-row lg:flex-col ">
              <button
                onClick={() => setActiveTabs("Experience")}
                className={`text-base font-normal p-[13px_10px] rounded-[10px]  hover:bg-[#15FFEA] hover:text-black text-center w-full duration-300  ${activeTabs === "Experience"
                  ? "bg-[#15FFEA] text-black"
                  : "bg-[#313131] text-white"
                  }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTabs("Education")}
                className={`text-base font-normal  p-[13px_10px] rounded-[10px]  hover:bg-[#15FFEA] hover:text-black text-center w-full duration-300  ${activeTabs === "Education"
                  ? "bg-[#15FFEA] text-black"
                  : "bg-[#313131] text-white"
                  }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTabs("Skills")}
                className={`text-base font-normal  p-[13px_10px] rounded-[10px]  hover:bg-[#15FFEA] hover:text-black text-center w-full duration-300  ${activeTabs === "Skills"
                  ? "bg-[#15FFEA] text-black"
                  : "bg-[#313131] text-white"
                  }`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTabs("About")}
                className={`text-base font-normal  p-[13px_10px] rounded-[10px]  hover:bg-[#15FFEA] hover:text-black text-center w-full duration-300  ${activeTabs === "About"
                  ? "bg-[#15FFEA] text-black"
                  : "bg-[#313131] text-white"
                  }`}
              >
                About me
              </button>
            </div>
          </div>
          <div className=" max-lg:w-full w-8/12">
            <div className="pt-7 lg:p-[30px_0px_30px_30px]  ">
              {activeTabs === "Experience" && <CardExp />}
              {activeTabs === "Skills" && <SkillCard />}
              {activeTabs === "About" && <AboutCard />}
              {activeTabs === "Education" && <EduCard />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireResume;
