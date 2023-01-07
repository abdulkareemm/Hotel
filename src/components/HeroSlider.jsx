import React from "react";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Autoplay } from "swiper";

// images
import Img1 from "../assets/img/heroSlider/1.jpg";
import Img2 from "../assets/img/heroSlider/2.jpg";
import Img3 from "../assets/img/heroSlider/3.jpg";

const slides = [
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img1,
    btnText: "See Our Rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img2,
    btnText: "See Our Rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img3,
    btnText: "See Our Rooms",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      className="heroSlider h-[600px] lg:h-[860px]"
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {slides.map((slide, idx) => {
        // destructure slide
        const { title, bg, btnText } = slide;
        return (
          <SwiperSlide
            className="h-full relative flex justify-center items-center"
            key={idx}
          >
            <div className="z-20 text-white text-center">
              <div className="uppercase font-tertiary tracking-[6px] mb-5 ">
                Just Enjoy and relax
              </div>
              <h1 className="text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6 ">
                {title}
              </h1>
              <button className="btn btn-lg btn-primary mx-auto">
                {btnText}
              </button>
            </div>

            <div className="absolute top-0 w-full h-full">
              <img src={bg} alt="" className="object-cover h-full w-full" />
            </div>
            {/* overlay */}
            <div className="absolute w-full h-full bg-black/70"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
