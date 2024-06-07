// Installation cmd ==> npm install swiper

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import banner from "../../../assets/image/banner.jpg";

// import required modules
import { Pagination } from "swiper/modules";

const Banner = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="my-10">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {arr.map((item, idx) => (
          <div key={idx}>
            <SwiperSlide>
              <div className="relative">
                <img src={banner} alt="" />
                <div className="absolute top-1/3 left-10 md:left-24  text-white text-left ">
                    <h2 className="text-2xl font-bold">CMA Fest</h2>
                    <p>Make memories that will last a lifetime. See your favorite <br /> artists live at CMA Fest!</p>
                    <div className="flex gap-4 mt-5">
                        <button className="btn btn-primary">Get Ticket</button>
                        <button className="btn btn-outline border-white text-white">Explore All Events</button>
                    </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
