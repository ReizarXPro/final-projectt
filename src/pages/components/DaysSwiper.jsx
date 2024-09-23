import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from "./DaysCard";

function Slider({ forecast }) {
  return (
    <div >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {forecast.map((day) => (
          <SwiperSlide key={day.date}>
            <div className="flex justify-center "> 
            <Card

              imageURL={day.day.condition.icon} 
              name={`Weather on ${day.date}`} 
              forecastday={day} 
            /></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
