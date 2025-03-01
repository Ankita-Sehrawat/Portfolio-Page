"use client";
import { MyWorkCard } from "./Helper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MyWork = () => {
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div id="work" className="max-lg:pt-12 pb-16 ">
      <div className="container max-w-[1140px] 2xl:max-w-[1550px] mx-auto px-5  ">
        <h1 className="text-[35px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-normal text-white sm:mb-5 lg:mb-0 text-center">
          My Work
        </h1>

        <div className=" py-8 ">
          <Slider {...settings}>
            {MyWorkCard.map((item, i) => (
              <div key={i} className="sm:px-3 mt-6 md:mt-16 ">
                <div className="border-2 border-[#15FFEA] p-3 sm:p-5 rounded-2xl h-[400px]  flex flex-col justify-between ">
                  <h1 className="text-white text-3xl sm:text-4xl font-bold uppercase">
                    {item.projectTitle}
                  </h1>
                  <a
                    className="text-[#15FFEA] text-lg sm:text-xl font-normal capitalize my-2 sm:my-4 inline-block"
                    href={item.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to visit the site
                  </a>
                  <p className="text-white text-sm sm:text-base font-normal capitalize grow overflow-scroll">
                    {item.projectDetail}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MyWork;




