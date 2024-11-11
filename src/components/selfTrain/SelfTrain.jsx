import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './selTrain.css'

// Images

import ABS from "../../assets/abs.png";
import Chest from "../../assets/chest.png";
import Back from "../../assets/back.png";
import Arms from "../../assets/arm.png";
import Legs from "../../assets/leg.png";

// import required modules
import { Navigation } from 'swiper/modules';
import MyCard from "../card/MyCard";



function SelfTrain() {
  return (
   
    <section className=' container section selfTrain_section '>
    
    <h1 className=' gradient_text  ' >Train Your Self </h1>
    <p className=" text-gray-500 my-10 text-center">Train your self with our AI tool to improve your muscles </p>
        
 <div className='cards-container flex justify-center mt-10 p-2 lg:px-40   '>
 
 <Swiper
       spaceBetween={30}
  rewind={true}
  navigation={true}
  modules={[Navigation]}
  breakpoints={{
    // when the window width is >= 640px (small screens)
    640: {
      slidesPerView: 1,
    },
    // when the window width is >= 768px (medium screens and up)
    880: {
      slidesPerView: 3,
    },
  }}
        className="mySwiper "
      >
        <SwiperSlide><MyCard title="ABS" imgSrc={ABS} /></SwiperSlide>
        <SwiperSlide><MyCard title="Chest" imgSrc={Chest} toLink={"/chest"}  /></SwiperSlide>
        <SwiperSlide><MyCard title="Back" imgSrc={Back} /></SwiperSlide>
        <SwiperSlide><MyCard title="Arms" imgSrc={Arms}  /></SwiperSlide>
        <SwiperSlide><MyCard title="Legs" imgSrc={Legs} /></SwiperSlide>
       
       
      </Swiper>

 </div>

    
    </section>





  )
}

export default SelfTrain