import React from "react";
import { SkillCardArr } from "./Helper";

const SkillCard = () => {
  return (
    <div>
      <h1 className="text-lg sm:text-[32px] font-semibold text-white mb-2 sm:mb-5">My Skills</h1>
      <p className="text-xs sm:text-base font-normal text-white/80 lg:w-[534px] tracking-[3px] pb-5 lg:pb-11 ">
        Lorem ipsum dolor sit amet consectetur. Aliquet elit dolorLorem ipsum
        dolor sit amet consectetur. Aliquet elit dolor..
      </p>
      <div className="flex flex-wrap -mx-[10px] max-lg:h-[250px] max-lg:overflow-y-scroll ">
        {SkillCardArr.map((items, i) => {
          return (
            <div
              key={i}
              className="w-6/12 sm:w-4/12 lg:w-3/12 px-[5px] mt-[10px] "
            >
              <div className="rounded-[10px] bg-[#313131] p-[20px_5px] xl:p-[45px_20px_20px_20px]  flex justify-center items-center flex-col h-full ">
                <span>{items.courseImg}</span>
                <p className="font-normal text-base tracking-[3px] text-white mt-1 text-center ">
                  {items.courseName}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;
