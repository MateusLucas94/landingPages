import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../css/StyleBannerPneus.css";

const Banner = () => {
  const imagens = [
    "./src/assets/imgPneus/pneu1.jpg",
    "./src/assets/imgPneus/pneu2.jpg",
    "./src/assets/imgPneus/pneu3.jpg",
    "./src/assets/imgPneus/pneu4.png",
  ];

  return (
    <div className="carrocel-container">
      <Swiper
        className="swiper-container"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {imagens.map((src, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <img
              src={src}
              alt={`Produto ${index + 1}`}
              className="carrocel-img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Banner;
