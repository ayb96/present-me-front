import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Testimonial.css";

import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export function Testimonial() {
  return (
    <div className="testimonial-container">
      <div className="title_test_wrapper">
        <h2 className="title_">Testimonial</h2>
      </div>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide className="q">
          <ChatOutlinedIcon className="test-icon" />
          <div>ayoub</div>
          <div>wrwrwrg</div>
          <div>wrwrwr</div>
          <div>wgwrgwrg</div>
          <button>click</button>
        </SwiperSlide>
        <SwiperSlide className="q">
          <ChatOutlinedIcon className="test-icon" />
        </SwiperSlide>
        <SwiperSlide className="q">
          <ChatOutlinedIcon className="test-icon" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
