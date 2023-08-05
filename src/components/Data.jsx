import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/mousewheel";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

export default function Data() {
  return (
    <div className="shadow-xl m-10">
      <Swiper
      loop={true}
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        
      >
        <SwiperSlide><img src="https://images.pexels.com/photos/3538282/pexels-photo-3538282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="h-[500px] rounded-lg" alt="Image1" /></SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/163792/model-planes-airplanes-miniatur-wunderland-hamburg-163792.jpeg" className="h-[500px] rounded-lg" alt="Image2" /></SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/3736488/pexels-photo-3736488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="h-[500px] rounded-lg" alt="Image3" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
