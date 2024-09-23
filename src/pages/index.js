import React, { useState } from "react";
import MainApi from './api/wather';
import AnimatedBack from './components/BackGround';
import Slider from "./components/DaysSwiper";
import { AnimatedBackDay } from "./components/BackGround";

export default function Home() {
  const [forecast, setForecast] = useState([]);

  return (
    <div className="relative z-0 bg-primary">
      <AnimatedBack />
      <MainApi setForecast={setForecast} />
      
      <div  className="bg-gradient-to-r from-cyan-500 to-blue-500   ">
          <Slider forecast={forecast} />
        
      </div>
    </div>
  );
}
