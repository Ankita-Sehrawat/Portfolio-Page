"use client";
import React, { useRef, useEffect } from "react";
import myWork_img1 from "../../../public/assets/images/png/myWork_img1.png";
import myWork_img2 from "../../../public/assets/images/png/myWork_img2.png";
import myWork_img3 from "../../../public/assets/images/png/myWork_img3.png";
import Image from "next/image";
import { MyWorkElp } from "./Icon";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MyWork = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Add animations to the timeline for horizontal sliding
    tl.fromTo(
      "#sliderImg1",
      { x: "0", y: "50%", rotate: "0" },
      {
        x: "-100%",
        opacity: 1,
        duration: 3,
        y: "75%",
        rotate: "-30%",
        opacity: "0",
      }
    )
      .fromTo(
        "#sliderImg2",
        { x: "120%", y: "50%", rotate: "30%" },
        { x: "-120%", opacity: 1, duration: 3, y: "50%", rotate: "-30%" },
        "-=2"
      )
      .fromTo(
        "#sliderImg3",
        { x: "100%", y: "50%", rotate: "30%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 3, y: "50%", rotate: "0" },
        "-=2"
      );
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      id="work"
      ref={containerRef}
      className="relative max-lg:pt-12 md:pb-20 overflow-hidden h-screen"
    >
      <h1 className="text-[35px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-normal text-white sm:mb-5 lg:mb-0 text-center">
        My Work
      </h1>
      <div className="absolute bottom-0 left-0 hidden lg:block">
        <MyWorkElp />
      </div>
      <div
        id="imgParent"
        className="flex justify-center gap-20 items-center w-screen relative mt-14 lg:mt-[150px]"
      >
        <Image
          id="sliderImg1"
          className="absolute w-[280px] sm:w-[560px]  md:h-[370px] top-0 -translate-y-1/2"
          src={myWork_img1}
          alt="img"
        />
        <Image
          id="sliderImg2"
          src={myWork_img2}
          alt="Image 2"
          className="absolute w-[280px] sm:w-[560px]  md:h-[370px] top-0 -translate-y-1/2"
        />
        <Image
          id="sliderImg3"
          src={myWork_img3}
          alt="Image 3"
          className="absolute w-[280px] sm:w-[560px]  md:h-[370px] top-0 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default MyWork;
