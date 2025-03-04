import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../css/StyleProdutosCarrocel.css";
import "swiper/swiper-bundle.css";

const ProdutosCarrocel = () => {
  const imagens = [
    "./src/assets/img/ponta1.jpg",
    "./src/assets/img/ponta2.jpg",
    "./src/assets/img/ponta3.jpg",
    "./src/assets/img/ponta4.jpg",
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

export default ProdutosCarrocel;
